import { useAuth } from '@hooks/useAuth';
import { useTranslation } from '@hooks/useTranslation';

export function SignInLink() {
  const { removePreviousAuth } = useAuth();

  const t = useTranslation('welcome-back');

  return (
    <button type="button" onClick={removePreviousAuth}>
      {t('footer.sign_in')}
    </button>
  );
}
