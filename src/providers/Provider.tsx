import { ReactElement } from 'react';
import { ThemeProvider } from 'next-themes';
import { IntlMessages, NextIntlProvider } from 'next-intl';

import { darkTheme } from '@styles/stitches.config';

type ProviderProps = {
  children: ReactElement;
  messages?: IntlMessages
}

export function Provider({ children, messages }: ProviderProps) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: 'light-theme', dark: darkTheme.className }}
      defaultTheme="system"
    >
      <NextIntlProvider messages={messages}>
        {children}
      </NextIntlProvider>
    </ThemeProvider>
  );
}
