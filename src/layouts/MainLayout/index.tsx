import { AuthenticationProvider } from '../../context/Authentication';

import { AboutProjectSection } from './components/AboutProjectSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

import styles from './styles.module.scss';

type MainLayoutProps = {
  children: JSX.Element | JSX.Element[];
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className={styles.container}>
      <Header />

      <div className={styles.pagesWrapper}>
        <section>
          <AuthenticationProvider>
           {children}
          </AuthenticationProvider>
        </section>

        <AboutProjectSection />
      </div>

      <Footer />
    </main>
  );
}
