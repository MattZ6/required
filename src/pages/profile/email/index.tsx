import { withLocaleMessages } from '@utils/ssg/withLocaleMessages';

export default function UpdateProfileEmailPage() {
  return <h1>UpdateProfileEmailPage</h1>
}

export const getStaticProps = withLocaleMessages(async () => {
  return {
    props: { }
  }
});
