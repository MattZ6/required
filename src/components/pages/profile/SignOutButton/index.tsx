import { useTranslation } from '@hooks/useTranslation';

import { FormButton } from '@components/form';

export function ProfileSignOutButton() {
  const t = useTranslation('profile');

  return <FormButton clear>{t('actions.sign-out-button')}</FormButton>;
}
