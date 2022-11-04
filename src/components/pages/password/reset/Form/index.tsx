import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { PasswordFormField, FormButton } from '@components/form'

import { PasswordResetFormType, passwordResetSchema } from './schema'
import { FormStyles as Styles } from './styles'

export function PasswordResetForm() {
  const t = useTranslations('password-reset-page')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setFocus,
  } = useForm<PasswordResetFormType>({
    resolver: zodResolver(passwordResetSchema),
  })

  async function updatePassword() {
    // TODO: update user password
  }

  useEffect(() => setFocus('new_password'), [setFocus])

  return (
    <Styles.Form onSubmit={handleSubmit(updatePassword)}>
      <PasswordFormField
        label={t('form.new_password.label')}
        placeholder={t('form.new_password.placeholder')}
        error={errors.new_password}
        disabled={isSubmitting}
        {...register('new_password')}
      />

      <PasswordFormField
        label={t('form.new_password_confirmation.label')}
        placeholder={t('form.new_password_confirmation.placeholder')}
        error={errors.new_password_confirmation}
        disabled={isSubmitting}
        {...register('new_password_confirmation')}
      />

      <Styles.Actions>
        <FormButton type="submit">{t('form.submit')}</FormButton>
      </Styles.Actions>
    </Styles.Form>
  )
}
