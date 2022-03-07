import { useTheme } from 'next-themes';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { useTranslation } from '@hooks/useTranslation';

import { ThemeSwitcherTriggerIcon as Icon } from './components';
import { ThemeSwitcherTriggerStyles as Styles } from './styles';

export function ThemeSwitcherTrigger() {
  const t = useTranslation('common');
  const { theme } = useTheme();

  return (
    <Styles.Trigger>
      <Icon theme={theme} />

      <span>{t(`themes.${theme}`)}</span>

      <MdKeyboardArrowDown />
    </Styles.Trigger>
  );
}
