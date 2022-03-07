import { MdDarkMode, MdLightMode, MdMonitor } from 'react-icons/md';

type Props = {
  theme: 'light' | 'dark' | 'system';
};

export function ThemeSwitcherTriggerIcon({ theme }: Props) {
  if (theme === 'light') {
    return <MdLightMode />;
  }

  if (theme === 'dark') {
    return <MdDarkMode />;
  }

  if (theme === 'system') {
    return <MdMonitor />;
  }

  return null;
}
