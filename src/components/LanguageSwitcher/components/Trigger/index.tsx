import { useRouter } from 'next/router';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { useTranslation } from '@hooks/useTranslation';

import { LanguageSwitcherFlagImage as Flag } from '@components/LanguageSwitcher/components';

import { LanguageSwitcherTriggerStyles as Styles } from './styles';

export function LanguageSwitcherTrigger() {
  const t = useTranslation('common');
  const { locale } = useRouter();

  return (
    <Styles.Trigger>
      <Flag locale={locale as any} width={24} height={18} />

      <Styles.Label>{t(`locales.${locale}`)}</Styles.Label>

      <MdKeyboardArrowDown />
    </Styles.Trigger>
  );
}
