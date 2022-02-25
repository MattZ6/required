import { useRouter } from 'next/router';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { useTranslation } from '@hooks/useTranslation';

import { LanguageSwitcherTriggerFlagImage as Flag } from './components';

import { LanguageSwitcherTriggerStyles as Styles } from './styles';

export function LanguageSwitcherTrigger() {
  const t = useTranslation('common');
  const { locale } = useRouter();

  return (
    <Styles.Trigger>
      <Flag locale={locale as any} />

      <Styles.Label>{t(`locales.${locale}`)}</Styles.Label>

      <MdKeyboardArrowDown />
    </Styles.Trigger>
  );
}
