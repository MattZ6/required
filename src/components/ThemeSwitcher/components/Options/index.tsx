import { useTheme } from 'next-themes'

import { ThemeSwitcherOption as Option } from './components'
import { ThemeSwitcherOptionsStyles as Styles } from './styles'

export function ThemeSwitcherOptions() {
  const { theme: currentTheme, themes, setTheme } = useTheme()

  return (
    <Styles.Container>
      <Styles.RadioGroup value={currentTheme} onValueChange={setTheme}>
        {themes.map((theme: any) => (
          <Option key={theme} theme={theme} />
        ))}
      </Styles.RadioGroup>
    </Styles.Container>
  )
}
