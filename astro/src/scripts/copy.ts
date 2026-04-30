const copyButtons = document.querySelectorAll<HTMLButtonElement>("[data-copy-target]");

copyButtons.forEach((button) => {
  const originalLabel = button.textContent;

  button.addEventListener("click", async () => {
    const targetId = button.dataset.copyTarget;
    const target = targetId ? document.getElementById(targetId) : null;
    const text = target?.textContent?.trim();

    if (!text || !target) return;

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }

      await navigator.clipboard.writeText(text);
      button.textContent = "Copied";
      window.setTimeout(() => {
        button.textContent = originalLabel;
      }, 1800);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.setAttribute("readonly", "");
      textArea.style.position = "fixed";
      textArea.style.inset = "0 auto auto 0";
      textArea.style.width = "1px";
      textArea.style.height = "1px";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      textArea.setSelectionRange(0, textArea.value.length);

      const copied = document.execCommand("copy");
      document.body.removeChild(textArea);

      if (!copied) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(target);
        selection?.removeAllRanges();
        selection?.addRange(range);
      }

      button.textContent = copied ? "Copied" : "Prompt selected";
      window.setTimeout(() => {
        button.textContent = originalLabel;
      }, 1800);
    }
  });
});

export {};
