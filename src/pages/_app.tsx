import type { AppProps } from 'next/app';

import { MainLayout } from '@layouts/Main';

import { Provider } from '@providers/Provider';

import { SEO } from '@components/SEO';

import { globalStyles } from '@styles/stitches.config';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <Provider messages={pageProps.messages}>
      <>
        <SEO />

        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </>
    </Provider>
  );
}

export default MyApp;
