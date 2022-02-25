import { useTranslation } from '@hooks/useTranslation';
import { useRouter } from 'next/router';

import { LanguageSwitcherOption as Option } from './components';

import { LanguageSwitcherOptionsStyles as Styles } from './styles';

export function LanguageSwitcherOptions() {
  const { locale: currentLocale, locales, replace, asPath } = useRouter();

  const onChange = (locale: string) => {
    replace(asPath, asPath, { locale });
  }

  return (
    <Styles.Container>
      <Styles.Options value={currentLocale} onValueChange={onChange}>
      { locales?.map(locale => <Option key={locale} locale={locale} />) }
      </Styles.Options>
    </Styles.Container>
  );
}
