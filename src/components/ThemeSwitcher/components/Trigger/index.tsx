import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { ThemeSwitcherTriggerIcon as Icon } from './components';
import { ThemeSwitcherTriggerStyles as Styles } from './styles';

export function ThemeSwitcherTrigger() {
  const t = useTranslations('common.themes');
  const { theme } = useTheme();

  return (
    <Styles.Trigger>
      <Icon theme={theme} />

      <span>{t(theme as any)}</span>

      <MdKeyboardArrowDown />
    </Styles.Trigger>
  );
}
