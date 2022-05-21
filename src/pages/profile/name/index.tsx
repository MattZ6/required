import { useTranslations } from 'next-intl';

import { withLocaleMessages } from '@utils/ssg/withLocaleMessages';

import { PageHeader } from '@components/pages/components';
import { UpdateProfileNameForm } from '@components/pages/profile/name/Form';
import { CommonPageStyles as Styles } from '@components/pages/styles';
import { SEO } from '@components/SEO';

export default function UpdateProfileNamePage() {
  const t = useTranslations('update-profile-name');

  return (
    <Styles.Page>
      <SEO
        title={t('title')}
        description={t('description')}
        icon={{ path: '/edit.png', type: 'image/png' }}
        image="/assets/seo/pages/edit.png"
      />

      <PageHeader
        title={t('title')}
        description={t('description')}
        backLinkUrl="/profile"
      />

      <UpdateProfileNameForm />
    </Styles.Page>
  );
}

export const getStaticProps = withLocaleMessages(async () => {
  return {
    props: {},
  };
});
