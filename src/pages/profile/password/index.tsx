import { withLocaleMessages } from '@utils/ssg/withLocaleMessages';

export default function UpdateProfilePasswordPage() {
  return <h1>UpdateProfilePasswordPage</h1>;
}

export const getStaticProps = withLocaleMessages(async () => {
  return {
    props: {},
  };
});
