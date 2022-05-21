import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

import { TextLink } from '@components/Link';

export function ForgotPasswordLink() {
  const { locale } = useRouter();

  const t = useTranslations('common');

  return (
    <TextLink to="/password/recovery" locale={locale}>
      {t('forgot_password')}
    </TextLink>
  );
}
