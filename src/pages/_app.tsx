import type { AppProps } from 'next/app';

import { MainLayout } from '@layouts/Main';

import { Provider } from '@providers/Provider';

import { SEO } from '@components/SEO';

import { globalStyles } from '@styles/stitches.config';

globalStyles();

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Provider messages={(pageProps as any).messages}>
      <>
        <SEO />

        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </>
    </Provider>
  );
}

export default CustomApp;
