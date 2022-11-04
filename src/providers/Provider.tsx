import { IntlError, IntlErrorCode, NextIntlProvider } from 'next-intl'
import { ThemeProvider } from 'next-themes'
import { ReactElement } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { AuthProvider } from '@contexts/Auth'
import { ToastProvider } from '@contexts/Toast'

import { darkTheme } from '@styles/stitches.config'

type ProviderProps = {
  children: ReactElement
  // eslint-disable-next-line no-undef
  messages?: IntlMessages
}

const queryClient = new QueryClient()

function onError(error: IntlError) {
  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    // Do something?
  }
}

function getMessageFallback({
  namespace,
  key,
  error,
}: {
  namespace?: string | undefined
  key: string
  error: IntlError
}) {
  const path = [namespace, key].filter((part) => part != null).join('.')

  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    return `${path} is not yet translated`
  }

  return `Dear developer, please fix this message: ${path}`
}

export function Provider({ children, messages }: ProviderProps) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: 'light-theme', dark: darkTheme.className }}
      defaultTheme="system"
    >
      <NextIntlProvider
        messages={messages}
        getMessageFallback={getMessageFallback}
        onError={onError}
      >
        <ToastProvider>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>{children}</AuthProvider>
          </QueryClientProvider>
        </ToastProvider>
      </NextIntlProvider>
    </ThemeProvider>
  )
}
