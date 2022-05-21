import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

import { TextLink } from '@components/Link';

export function SignInLink() {
  const { locale } = useRouter();

  const t = useTranslations('sign-up.footer');

  return (
    <TextLink to="/sign/in" locale={locale}>
      {t('sign_in')}
    </TextLink>
  );
}
