export function setFocusOnInput(name: string) {
  const input = document.querySelector<HTMLInputElement>(
    `input[name="${name}"]`
  );

  input?.focus();
}
