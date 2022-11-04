import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { MdMailOutline } from 'react-icons/md'

import { FormField, FormButton } from '@components/form'

import { PasswordRecoveryFormType, passwordRecoverySchema } from './schema'
import { FormStyles as Styles } from './styles'

export function PasswordRecoveryForm() {
  const t = useTranslations('password-recovery-page')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setFocus,
  } = useForm<PasswordRecoveryFormType>({
    resolver: zodResolver(passwordRecoverySchema),
  })

  async function forgotPassword() {
    // TODO:
  }

  useEffect(() => setFocus('email'), [setFocus])

  return (
    <Styles.Form onSubmit={handleSubmit(forgotPassword)}>
      <FormField
        label={t('form.email.label')}
        placeholder={t('form.email.placeholder')}
        icon={MdMailOutline}
        error={errors.email}
        disabled={isSubmitting}
        {...register('email')}
      />

      <Styles.Actions>
        <FormButton type="submit">{t('form.submit')}</FormButton>
      </Styles.Actions>
    </Styles.Form>
  )
}
