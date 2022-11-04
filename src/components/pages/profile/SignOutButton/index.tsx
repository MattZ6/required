import { useTranslations } from 'next-intl'

import { useAuth } from '@hooks/useAuth'

import { FormButton } from '@components/form'

export function ProfileSignOutButton() {
  const { signOut } = useAuth()
  const t = useTranslations('profile.actions')

  return (
    <FormButton clear onClick={() => signOut()}>
      {t('sign-out-button')}
    </FormButton>
  )
}
