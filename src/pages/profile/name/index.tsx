import { useTranslation } from '@hooks/useTranslation';

import { withLocaleMessages } from '@utils/ssg/withLocaleMessages';

import { PageHeader } from '@components/pages/components';
import { UpdateProfileNameForm } from '@components/pages/profile/name/Form';
import { CommonPageStyles as Styles } from '@components/pages/styles';

export default function UpdateProfileNamePage() {
  const t = useTranslation('update-profile-name');

  return (
    <Styles.Page>
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
