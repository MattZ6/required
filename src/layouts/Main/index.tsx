import { ReactElement } from 'react';

import { Footer, Header, ProjectDescription } from './components';

import { MainLayoutStyles } from './styles';

type MainLayoutProps = {
  children: ReactElement;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <MainLayoutStyles.Container>
      <Header />

      <MainLayoutStyles.Content>
        <MainLayoutStyles.Page>
          {children}
        </MainLayoutStyles.Page>

        <ProjectDescription />
      </MainLayoutStyles.Content>

      <Footer />
    </MainLayoutStyles.Container>
  );
}
