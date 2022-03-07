import type { AppProps } from 'next/app';

import { MainLayout } from '@layouts/Main';

import { Provider } from '@providers/Provider';

import { globalStyles } from '@styles/stitches.config';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <Provider messages={pageProps.messages}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}

export default MyApp;
