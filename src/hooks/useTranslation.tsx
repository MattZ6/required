import { useTranslations as useNextIntlTranslations } from 'next-intl';

import type defaultLocale from '@locales/en-us.json';

type Locale = keyof typeof defaultLocale;

export function useTranslation(locale: Locale) {
  return useNextIntlTranslations(locale);
}
