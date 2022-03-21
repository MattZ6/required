import { useTranslations as useNextIntlTranslations } from 'next-intl';

import type defaultLocale from '@locales/en-us.json';

type Messages = typeof defaultLocale;

type MessagesNamespace = keyof Messages;

type Translation<T extends keyof Messages> = keyof Messages[T];

export function useTranslation<T extends MessagesNamespace = MessagesNamespace>(
  namespace: T
) {
  const translation = useNextIntlTranslations(namespace);

  function translate(
    // TODO: Ver uma forma de fazer a tipagem de forma recursiva
    key: Translation<T> | string,
    values?: Record<string, any>
  ) {
    return translation(String(key), values);
  }

  return translate;
}
