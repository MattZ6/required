import { IntlMessages, NextIntlProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AuthProvider } from '@contexts/Auth';
import { ToastProvider } from '@contexts/Toast';

import { darkTheme } from '@styles/stitches.config';

type ProviderProps = {
  children: ReactElement;
  messages?: IntlMessages;
};

const queryClient = new QueryClient();

export function Provider({ children, messages }: ProviderProps) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: 'light-theme', dark: darkTheme.className }}
      defaultTheme="system"
    >
      <NextIntlProvider messages={messages}>
        <ToastProvider>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>{children}</AuthProvider>
          </QueryClientProvider>
        </ToastProvider>
      </NextIntlProvider>
    </ThemeProvider>
  );
}
