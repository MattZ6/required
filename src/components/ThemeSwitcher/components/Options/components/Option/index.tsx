import { useTranslations } from 'next-intl';

import { ThemeSwitcherOptionStyles as Styles } from './styles';

type Props = {
  theme: 'light' | 'dark' | 'system';
};

export function ThemeSwitcherOption({ theme }: Props) {
  const t = useTranslations('common.themes');

  return (
    <Styles.Option value={theme}>
      <Styles.IndicatorContainer>
        <Styles.SelectionIndicator />
      </Styles.IndicatorContainer>

      <Styles.Text>{t(theme as any)}</Styles.Text>
    </Styles.Option>
  );
}
