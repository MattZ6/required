
import { ThemeSwitcher } from '@components/ThemeSwitcher';

import {
  HeaderTitle as Title
} from './components';

import { MainLayoutHeader as Styles } from './styles';

export function Header() {
  return (
    <Styles.Header>
      <Styles.Content>
        <Title />

        <Styles.Right>
          <ThemeSwitcher />
        </Styles.Right>
      </Styles.Content>
    </Styles.Header>
  );
}
