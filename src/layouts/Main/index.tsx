import { ReactElement } from 'react';

import { Footer, Header, Project } from './components';
import { MainLayoutStyles as Styles } from './styles';

type MainLayoutProps = {
  children: ReactElement;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <Styles.Container>
      <Header />

      <Styles.Content>
        <Styles.Page>{children}</Styles.Page>

        <Project />
      </Styles.Content>

      <Footer />
    </Styles.Container>
  );
}
