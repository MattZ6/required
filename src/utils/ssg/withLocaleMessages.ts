import { loadLocaleMessages } from '@utils/loadLocaleMessages';
import { GetStaticProps, GetStaticPropsContext, GetStaticPropsResult } from 'next';

type WithMessages<P> = P & {
  messages?: any;
}

export function withLocaleMessages<P>(fn: GetStaticProps<P>) {
  return async function(context: GetStaticPropsContext) {
    const { locale } = context;

    const messages = await loadLocaleMessages(locale ?? 'en-US');

    const response: any = await fn(context);

    return {
      ...response,
      props: {
        ...response?.props ?? { },
        messages,
      }
    } as GetStaticPropsResult<WithMessages<P>>;
  }
}
