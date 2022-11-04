import { useTranslations } from 'next-intl'

import { useAuth } from '@hooks/useAuth'

export function SignInLink() {
  const { removePreviousAuth } = useAuth()

  const t = useTranslations('welcome-back.footer')

  return (
    <button type="button" onClick={removePreviousAuth}>
      {t('sign_in')}
    </button>
  )
}
