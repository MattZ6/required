import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next'

import { loadLocaleMessages } from '@utils/loadLocaleMessages'

type WithMessages<P> = P & {
  messages?: any
}

export function withLocaleMessages<P = any>(fn: GetStaticProps<any>) {
  return async (context: GetStaticPropsContext) => {
    const { locale } = context

    const messages = await loadLocaleMessages(locale ?? 'en-US')

    const response: any = await fn(context)

    return {
      ...response,
      props: {
        ...(response?.props ?? {}),
        messages,
      },
    } as GetStaticPropsResult<WithMessages<P>>
  }
}
