import { GetStaticProps } from 'next';

import { loadLocalMessages } from '@utils/loadLocalMessages';
import { useTranslation } from '@hooks/useTranslation';

export default function Home() {
  const t = useTranslation('home');

  return (
    <>
      <h1>{t('title')}</h1>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: await loadLocalMessages(locale),
    }
  }
}
