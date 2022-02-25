import { useRouter } from 'next/router';

import { useTranslation } from '@hooks/useTranslation';

import { TextLink } from '@components/Link';

export function CreateAccountLink() {
  const { locale } = useRouter();

  const t = useTranslation('sign-in');

  return (
    <TextLink to="/sign/up" locale={locale}>
      {t('footer.create_account')}
    </TextLink>
  );
}
