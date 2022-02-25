import { useTheme } from 'next-themes';

import { ThemeSwitcherOption as Option } from './components';

import { ThemeSwitcherOptionsStyles as Styles } from './styles';

export function ThemeSwitcherOptions() {
  const { theme: currentTheme, themes, setTheme } = useTheme();

  return (
    <Styles.Container>
      <Styles.List value={currentTheme} onValueChange={setTheme}>
        { themes.map((theme: any) => <Option key={theme} theme={theme} />) }
      </Styles.List>
    </Styles.Container>
  );
}
