import { useRouter } from 'next/router';

import { useTranslation } from '@hooks/useTranslation';

import { TextLink } from '@components/Link';

export function SignInLink() {
  const { locale } = useRouter();

  const t = useTranslation('welcome-back');

  return (
    <TextLink to="/sign/in" locale={locale}>
      {t('footer.sign_in')}
    </TextLink>
  );
}
