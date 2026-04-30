#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { isAbsolute, resolve } from "node:path";
import YAML from "yaml";

const ROOT = process.cwd();
const DEFAULT_TEMPLATE = "src/pages/_template.md";
const DEFAULT_REFERENCE = "src/pages/flight-price-monitoring.md";

const OPTIONAL_EXTRA_PATHS = new Set([
  "$.hero.backdrop.right",
  "$.hero.backdrop.color",
  "$.hero.backdrop.letterSpacing"
]);

const MACHINE_SEGMENTS = new Set([
  "layout",
  "bodyClass",
  "themeColor",
  "schema",
  "titleId",
  "href",
  "topLinkHref",
  "copyTarget",
  "ariaLabel",
  "responseAriaLabel",
  "number",
  "primary",
  "open",
  "right",
  "color",
  "letterSpacing"
]);

function usage() {
  return [
    "Usage:",
    "  npm run check:fields -- mode1 --target src/pages/<file>.md",
    "  npm run check:fields -- mode2 --target src/pages/<file>.md",
    "",
    "Options:",
    `  --template <path>   Default: ${DEFAULT_TEMPLATE}`,
    `  --reference <path>  Default: ${DEFAULT_REFERENCE}`
  ].join("\n");
}

function parseArgs(argv) {
  const [mode, ...rest] = argv;
  const args = {
    mode,
    target: undefined,
    template: DEFAULT_TEMPLATE,
    reference: DEFAULT_REFERENCE
  };

  for (let index = 0; index < rest.length; index += 1) {
    const key = rest[index];
    const value = rest[index + 1];

    if (key === "--target" || key === "--template" || key === "--reference") {
      if (!value || value.startsWith("--")) {
        throw new Error(`Missing value for ${key}`);
      }
      args[key.slice(2)] = value;
      index += 1;
      continue;
    }

    throw new Error(`Unknown argument: ${key}`);
  }

  if (args.mode !== "mode1" && args.mode !== "mode2") {
    throw new Error("Mode must be mode1 or mode2");
  }

  if (!args.target) {
    throw new Error("Missing --target");
  }

  return args;
}

function absolutePath(filePath) {
  return isAbsolute(filePath) ? filePath : resolve(ROOT, filePath);
}

function frontmatterFromFile(filePath) {
  const absolute = absolutePath(filePath);
  const markdown = readFileSync(absolute, "utf8");
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);

  if (!match) {
    throw new Error(`${filePath}: missing YAML frontmatter block`);
  }

  try {
    const parsed = YAML.parse(match[1]);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("frontmatter root must be an object");
    }
    return parsed;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`${filePath}: invalid YAML frontmatter: ${message}`);
  }
}

function describeType(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function isEmptyRequiredValue(value) {
  if (typeof value === "string") return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (isPlainObject(value)) return false;
  return value === null || value === undefined;
}

function childPath(path, key) {
  return `${path}.${key}`;
}

function indexedPath(path, index) {
  return `${path}[${index}]`;
}

function compareShape(template, target, path, errors) {
  const templateType = describeType(template);
  const targetType = describeType(target);

  if (templateType !== targetType) {
    errors.push(`${path}: expected ${templateType}, found ${targetType}`);
    return;
  }

  if (isEmptyRequiredValue(target)) {
    errors.push(`${path}: required value must be non-empty`);
    return;
  }

  if (Array.isArray(template)) {
    if (target.length !== template.length) {
      errors.push(`${path}: expected ${template.length} item(s), found ${target.length}`);
      return;
    }

    template.forEach((templateItem, index) => {
      compareShape(templateItem, target[index], indexedPath(path, index), errors);
    });
    return;
  }

  if (isPlainObject(template)) {
    const templateKeys = Object.keys(template);
    const targetKeys = Object.keys(target);

    for (const key of templateKeys) {
      const nextPath = childPath(path, key);
      if (!(key in target)) {
        errors.push(`${nextPath}: missing required field`);
        continue;
      }
      compareShape(template[key], target[key], nextPath, errors);
    }

    for (const key of targetKeys) {
      if (templateKeys.includes(key)) continue;
      const nextPath = childPath(path, key);
      if (!OPTIONAL_EXTRA_PATHS.has(nextPath)) {
        errors.push(`${nextPath}: extra field not present in template`);
      } else if (isEmptyRequiredValue(target[key])) {
        errors.push(`${nextPath}: optional field is present but empty`);
      } else if (typeof target[key] !== "string") {
        errors.push(`${nextPath}: optional field must be string when present`);
      }
    }
  }
}

function validateMode1({ template, target, targetPath }) {
  const errors = [];
  compareShape(template, target, "$", errors);

  if (errors.length > 0) {
    throw new Error(
      [
        `mode1 failed for ${targetPath}`,
        ...errors.map((error) => `- ${error}`),
        "",
        "Hint: copy the field tree and array item counts from src/pages/_template.md; only fill existing fields."
      ].join("\n")
    );
  }
}

function excludedMachinePath(path) {
  const segments = path
    .replace(/^\$\./, "")
    .replace(/\[\d+\]/g, "")
    .split(".")
    .filter(Boolean);

  if (path.startsWith("$.hero.backdrop.")) return true;
  if (path.startsWith("$.footer.links.") && path.endsWith(".href")) return true;
  return segments.some((segment) => MACHINE_SEGMENTS.has(segment));
}

function collectCopyStrings(value, path = "$", entries = []) {
  if (typeof value === "string") {
    if (!excludedMachinePath(path)) {
      entries.push({ path, value });
    }
    return entries;
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => collectCopyStrings(item, indexedPath(path, index), entries));
    return entries;
  }

  if (isPlainObject(value)) {
    Object.entries(value).forEach(([key, item]) => {
      collectCopyStrings(item, childPath(path, key), entries);
    });
  }

  return entries;
}

function pathMap(entries) {
  return new Map(entries.map((entry) => [entry.path, entry.value]));
}

function validateMode2({ target, reference, targetPath }) {
  const errors = [];
  const targetCopy = pathMap(collectCopyStrings(target));
  const referenceCopy = pathMap(collectCopyStrings(reference));

  for (const [path, referenceValue] of referenceCopy) {
    if (!targetCopy.has(path)) {
      errors.push(`${path}: missing human-facing copy field`);
      continue;
    }

    const targetValue = targetCopy.get(path);
    const referenceLength = referenceValue.length;
    const min = Math.floor(referenceLength * 0.8);
    const max = Math.ceil(referenceLength * 1.2);
    const targetLength = targetValue.length;

    if (targetLength < min || targetLength > max) {
      errors.push(
        `${path}: ${targetLength} chars, expected ${min}-${max} chars based on ${DEFAULT_REFERENCE} (${referenceLength} chars)`
      );
    }
  }

  if (errors.length > 0) {
    throw new Error(
      [
        `mode2 failed for ${targetPath}`,
        ...errors.map((error) => `- ${error}`),
        "",
        "Hint: match flight-price-monitoring.md's field-by-field copy density within +/-20%; leave layout, hrefs, IDs, booleans, step numbers, and class/control fields untouched."
      ].join("\n")
    );
  }
}

function main() {
  try {
    const args = parseArgs(process.argv.slice(2));
    const template = frontmatterFromFile(args.template);
    const target = frontmatterFromFile(args.target);

    validateMode1({ template, target, targetPath: args.target });

    if (args.mode === "mode2") {
      const reference = frontmatterFromFile(args.reference);
      validateMode1({ template, target: reference, targetPath: args.reference });
      validateMode2({ target, reference, targetPath: args.target });
    }

    console.log(`${args.mode} passed: ${args.target}`);
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    console.error("");
    console.error(usage());
    process.exit(1);
  }
}

main();
