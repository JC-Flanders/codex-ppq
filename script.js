const copyButtons = document.querySelectorAll("[data-copy-target]");

copyButtons.forEach((button) => {
  const originalLabel = button.textContent;

  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    const text = target?.innerText.trim();

    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      button.textContent = "Copied";
      window.setTimeout(() => {
        button.textContent = originalLabel;
      }, 1800);
    } catch {
      button.textContent = "Select prompt";
    }
  });
});
