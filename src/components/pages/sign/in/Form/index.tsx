import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { MdMailOutline } from 'react-icons/md'

import { useAuth } from '@hooks/useAuth'

import { parseRequestError } from '@utils/parseRequestError'

import { AlertDialog } from '@components/AlertDialog'
import { FormField, PasswordFormField, FormButton } from '@components/form'

import { SignInFormType, signInSchema } from './schema'
import { FormStyles as Styles } from './styles'

export function SignInForm() {
  const { signIn } = useAuth()
  const t = useTranslations('sign-in')
  const [hasError, setHasError] = useState(false)

  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
    setFocus,
    setError,
  } = useForm<SignInFormType>({
    resolver: zodResolver(signInSchema),
  })

  async function handleSignIn(input: SignInFormType) {
    const { email, password } = input

    try {
      await signIn({ email, password })
    } catch (error) {
      const parsedError = parseRequestError<SignInFormType>(error)

      if (parsedError.error.validation) {
        const { field, message } = parsedError.error.validation
        setError(field, { message })
        return
      }

      if (parsedError.error.code === 'user.not.exists') {
        setError('email', { message: 'sign-in.errors.email.not_exists' })
        return
      }

      if (parsedError.error.code === 'password.wrong') {
        setError('password', { message: 'sign-in.errors.password.wrong' })
      }

      setHasError(true)
    }
  }

  function onModalRequestClose() {
    setHasError(false)
    setFocus('email')
  }

  useEffect(() => setFocus('email'), [setFocus])

  return (
    <>
      <Styles.Form onSubmit={handleSubmit(handleSignIn)} noValidate>
        <FormField
          label={t('form.email.label')}
          placeholder={t('form.email.placeholder')}
          type="email"
          icon={MdMailOutline}
          error={errors.email}
          disabled={isSubmitting}
          {...register('email')}
        />

        <PasswordFormField
          label={t('form.password.label')}
          placeholder={t('form.password.placeholder')}
          error={errors.password}
          disabled={isSubmitting}
          {...register('password')}
        />

        <Styles.Actions>
          <FormButton
            type="submit"
            disabled={isSubmitting}
            showLoading={isSubmitting}
          >
            {t('form.submit')}
          </FormButton>
        </Styles.Actions>
      </Styles.Form>

      <AlertDialog
        title={t('errors.fallback.title')}
        description={t('errors.fallback.description')}
        buttonText={t('errors.fallback.button')}
        isOpen={hasError}
        onOpenChange={() => onModalRequestClose()}
      />
    </>
  )
}
