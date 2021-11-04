import type { AppProps } from 'next/app'

import { MainLayout } from '../layouts/MainLayout';

import '../styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
