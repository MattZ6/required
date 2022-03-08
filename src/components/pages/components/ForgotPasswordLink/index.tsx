import { useRouter } from 'next/router';

import { useTranslation } from '@hooks/useTranslation';

import { TextLink } from '@components/Link';

export function ForgotPasswordLink() {
  const { locale } = useRouter();

  const t = useTranslation('common');

  return (
    <TextLink to="/password/recovery" locale={locale}>
      {t('forgot_password')}
    </TextLink>
  );
}
