export function setFocusOnInput(selector: string) {
  const input = document.querySelector<HTMLInputElement>(selector);

  input?.focus();
}
