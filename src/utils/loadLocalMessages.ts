export async function loadLocalMessages(locale: 'en-us' | 'pt-br' | string | undefined) {
  return (await import(`../locales/${String(locale ?? 'en-us').toLowerCase()}.json`)).default;
}
