import { useTranslation } from '@hooks/useTranslation';
import { ThemeSwitcherOptionStyles as Styles } from './styles';

type Props = {
  theme: 'light' | 'dark' | 'system';
}

export function ThemeSwitcherOption({ theme }: Props) {
  const t = useTranslation('common');

  return (
    <Styles.Option value={theme}>
      <Styles.IndicatorContainer>
        <Styles.SelectionIndicator />
      </Styles.IndicatorContainer>

      <Styles.Text>{t(`themes.${theme}`)}</Styles.Text>
    </Styles.Option>
  );
}
