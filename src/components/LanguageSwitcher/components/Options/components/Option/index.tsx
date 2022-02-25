import { useTranslation } from '@hooks/useTranslation';

import { LanguageSwitcherOptionSyles as Styles } from './styles';

type Props = {
  locale: string;
}

export function LanguageSwitcherOption({ locale }: Props) {
  const t = useTranslation('common');

  return (
    <Styles.Option value={locale}>
      <Styles.Flag />
      <Styles.Text>{t(`locales.${locale}`)}</Styles.Text>
    </Styles.Option>
  );
}
