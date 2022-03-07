import { withLocaleMessages } from '@utils/ssg/withLocaleMessages';

import { PageHeader } from '@components/pages/components';

export default function UpdateProfileNamePage() {
  return (
    <PageHeader
      title="Update name"
      description="Update your profile name"
      backLinkUrl="/profile"
    />
  );
}

export const getStaticProps = withLocaleMessages(async () => {
  return {
    props: {},
  };
});
