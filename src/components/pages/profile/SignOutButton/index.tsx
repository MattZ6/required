import { useAuth } from '@hooks/useAuth';
import { useTranslation } from '@hooks/useTranslation';

import { FormButton } from '@components/form';

export function ProfileSignOutButton() {
  const { signOut } = useAuth();
  const t = useTranslation('profile');

  return (
    <FormButton clear onClick={() => signOut()}>
      {t('actions.sign-out-button')}
    </FormButton>
  );
}
