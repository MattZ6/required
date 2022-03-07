import { useTranslation } from '@hooks/useTranslation';

import { withLocaleMessages } from '@utils/ssg/withLocaleMessages';

export default function Home() {
  const t = useTranslation('home');

  return <h1>{t('title')}</h1>;
}

export const getStaticProps = withLocaleMessages(async () => {
  return {
    props: {},
  };
});
