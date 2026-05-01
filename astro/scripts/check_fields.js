#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { isAbsolute, resolve } from "node:path";
import YAML from "yaml";

const ROOT = process.cwd();
const DEFAULT_TEMPLATE = "src/pages/_template.md";
const DEFAULT_REFERENCE = "src/pages/flight-price-monitoring.md";

const FIELD_CAPS = new Map([
  ["$.hero.title.text", { max: 24 }],
  ["$.hero.title.highlight", { max: 20 }],
  ["$.hero.title.combined", { max: 38 }],
  ["$.hero.lead", { max: 155 }],
  ["$.hero.preview.request", { max: 185 }],
  ["$.hero.preview.code", { max: 350 }],
  ["$.intro.text", { max: 190 }],
  ["$.results.text", { max: 160 }],
  ["$.results.metrics[].text", { max: 110 }],
  ["$.steps.items[].text", { max: 115 }],
  ["$.benefits.items[].text", { max: 120 }],
  ["$.facts.text", { max: 190 }],
  ["$.facts.items[].value", { max: 75 }],
  ["$.prompt.code", { max: 900 }],
  ["$.faq.items[].answer", { max: 190 }]
]);

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
    "  npm run check:fields -- mode1 --target src/pages/<file>.md --debug",
    "  npm run check:fields -- mode2 --target src/pages/<file>.md --debug",
    "",
    "Options:",
    `  --template <path>   Default: ${DEFAULT_TEMPLATE}`,
    `  --reference <path>  Default: ${DEFAULT_REFERENCE}`,
    "  --debug            Print per-field validation details before the final result"
  ].join("\n");
}

function parseArgs(argv) {
  const [mode, ...rest] = argv;
  const args = {
    mode,
    target: undefined,
    template: DEFAULT_TEMPLATE,
    reference: DEFAULT_REFERENCE,
    debug: false
  };

  for (let index = 0; index < rest.length; index += 1) {
    const key = rest[index];
    const value = rest[index + 1];

    if (key === "--debug") {
      args.debug = true;
      continue;
    }

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

function normalizeFieldPath(path) {
  return path.replace(/\[\d+\]/g, "[]");
}

function collectTemplateFieldPresence(template, target, path = "$", targetExists = true, entries = []) {
  if (Array.isArray(template)) {
    template.forEach((templateItem, index) => {
      const hasTargetItem = targetExists && Array.isArray(target) && index in target;
      collectTemplateFieldPresence(
        templateItem,
        hasTargetItem ? target[index] : undefined,
        indexedPath(path, index),
        hasTargetItem,
        entries
      );
    });
    return entries;
  }

  if (isPlainObject(template)) {
    Object.entries(template).forEach(([key, templateValue]) => {
      const hasTargetValue = targetExists && isPlainObject(target) && key in target;
      collectTemplateFieldPresence(
        templateValue,
        hasTargetValue ? target[key] : undefined,
        childPath(path, key),
        hasTargetValue,
        entries
      );
    });
    return entries;
  }

  entries.push({
    path,
    exists: targetExists
  });
  return entries;
}

function printMode1Debug({ template, target, targetPath }) {
  console.log(`mode1 debug: ${targetPath}`);
  console.log("target file: exists");

  for (const entry of collectTemplateFieldPresence(template, target)) {
    console.log(`${entry.exists ? "PASS" : "FAIL"} ${entry.path}: ${entry.exists ? "exists" : "missing"}`);
  }
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

function collectDerivedCopyStrings(value) {
  if (!isPlainObject(value)) return [];

  const hero = isPlainObject(value.hero) ? value.hero : {};
  const title = isPlainObject(hero.title) ? hero.title : {};

  if (typeof title.text !== "string" || typeof title.highlight !== "string") {
    return [];
  }

  return [
    {
      path: "$.hero.title.combined",
      value: `${title.text}${title.highlight}`
    }
  ];
}

function collectMode2CopyStrings(value) {
  return [...collectCopyStrings(value), ...collectDerivedCopyStrings(value)];
}

function pathMap(entries) {
  return new Map(entries.map((entry) => [entry.path, entry.value]));
}

function fieldLimits({ path, referenceLength }) {
  const cap = FIELD_CAPS.get(normalizeFieldPath(path));

  if (cap) {
    return {
      min: cap.min ?? 0,
      max: cap.max,
      source: "field_caps",
      referenceLength
    };
  }

  if (referenceLength === undefined) {
    throw new Error(`${path}: missing reference copy field and no field_caps override`);
  }

  return {
    min: Math.floor(referenceLength * 0.8),
    max: Math.ceil(referenceLength * 1.2),
    source: "reference +/-20%",
    referenceLength
  };
}

function mode2Rows({ target, reference }) {
  const targetCopy = pathMap(collectMode2CopyStrings(target));
  const referenceCopy = pathMap(collectMode2CopyStrings(reference));
  const paths = new Set(referenceCopy.keys());

  return [...paths].map((path) => {
    const referenceValue = referenceCopy.get(path);
    const referenceLength = referenceValue?.length;
    const limits = fieldLimits({ path, referenceLength });
    const targetValue = targetCopy.get(path);
    const targetLength = targetValue?.length;
    const passed = targetLength !== undefined && targetLength >= limits.min && targetLength <= limits.max;

    return {
      path,
      ...limits,
      targetLength,
      passed
    };
  });
}

function printMode2Debug({ target, reference, targetPath }) {
  console.log(`mode2 debug: ${targetPath}`);

  for (const row of mode2Rows({ target, reference })) {
    const actual = row.targetLength === undefined ? "missing" : `${row.targetLength} chars`;
    console.log(
      `${row.passed ? "PASS" : "FAIL"} ${row.path}: range ${row.min}-${row.max} chars (${row.source}), actual ${actual}`
    );
  }
}

function validateMode2({ target, reference, targetPath }) {
  const errors = [];

  for (const row of mode2Rows({ target, reference })) {
    if (row.targetLength === undefined) {
      errors.push(`${row.path}: missing human-facing copy field`);
      continue;
    }

    if (!row.passed) {
      if (row.source === "field_caps") {
        errors.push(`${row.path}: ${row.targetLength} chars, expected ${row.min}-${row.max} chars from field_caps`);
      } else {
        errors.push(
          `${row.path}: ${row.targetLength} chars, expected ${row.min}-${row.max} chars from reference +/-20% based on ${DEFAULT_REFERENCE} (${row.referenceLength} chars)`
        );
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(
      [
        `mode2 failed for ${targetPath}`,
        ...errors.map((error) => `- ${error}`),
        "",
        "Hint: match field_caps where configured; otherwise match flight-price-monitoring.md's field-by-field copy density within +/-20%. Leave layout, hrefs, IDs, booleans, step numbers, and class/control fields untouched."
      ].join("\n")
    );
  }
}

function main() {
  try {
    const args = parseArgs(process.argv.slice(2));
    const template = frontmatterFromFile(args.template);
    const target = frontmatterFromFile(args.target);
    const reference = args.mode === "mode2" ? frontmatterFromFile(args.reference) : undefined;

    if (args.debug && args.mode === "mode1") {
      printMode1Debug({ template, target, targetPath: args.target });
    }

    if (args.debug && reference) {
      printMode2Debug({ target, reference, targetPath: args.target });
    }

    validateMode1({ template, target, targetPath: args.target });

    if (reference) {
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
