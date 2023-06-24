'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useLayoutEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useUpdatePassword } from '@hooks/useUpdatePassword'

import { parseError } from '@utils/parseRequestError'

import { showAlert } from '@components/AlertDialogHandler'
import { Button } from '@components/Button'
import { Field } from '@components/Field'

import { changePasswordSchema, ChangePasswordFormType } from './schema'
import styles from './styles.module.scss'

export function Form() {
  const router = useRouter()
  const { send } = useUpdatePassword()
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setFocus,
    register,
    setError,
  } = useForm<ChangePasswordFormType>({
    resolver: zodResolver(changePasswordSchema),
  })

  async function signIn(input: ChangePasswordFormType) {
    const { old_password, new_password, new_password_confirmation } = input

    try {
      await send({ old_password, new_password, new_password_confirmation })

      // @TODO: Adicionar um toast com uma mensagem de sucesso

      router.replace('/')
    } catch (error) {
      const requestError = parseError<ChangePasswordFormType>(error)

      const { code, validation } = requestError.error

      if (code === 'validation' && validation) {
        const { field, message } = validation

        setTimeout(() => setError(field, { message }, { shouldFocus: true }), 0)

        return
      }

      if (code === 'password.wrong' && validation) {
        const { message } = validation

        setTimeout(
          () => setError('old_password', { message }, { shouldFocus: true }),
          0,
        )

        return
      }

      if (!navigator.onLine) {
        showAlert({
          type: 'error',
          icon: 'ph-wifi-slash',
          title: 'You seem to be offline',
          description: 'Please check your internet connection and try again.',
          closeButtonText: 'Ok',
        })

        return
      }

      if (code === 'token.expired') {
        showAlert({
          type: 'error',
          icon: 'ph-clock-countdown',
          title: 'Looks like your session is over',
          description: 'Please login again.',
          closeButtonText: 'Ok',
        })

        return
      }

      if (code === 'token.not.provided') {
        showAlert({
          type: 'error',
          icon: 'ph-prohibit',
          title: 'It looks like you are not logged in',
          description: 'Please log in and try again.',
          closeButtonText: 'Ok',
        })

        return
      }

      showAlert({
        type: 'error',
        icon: 'ph-warning-circle',
        title: 'Ooops... Something went wrong!',
        description:
          'It was not possible to change your name at this time. You can try again at any time.',
        closeButtonText: 'Close',
      })
    }
  }

  useLayoutEffect(() => setFocus('old_password'), [setFocus])

  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit(signIn)}
      noValidate
    >
      <Field
        type="password"
        label="Current password"
        leadingIcon="lock"
        placeholder="Type your current password"
        error={errors.old_password}
        disabled={isSubmitting}
        {...register('old_password')}
      />

      <Field
        type="password"
        label="New password"
        leadingIcon="lock"
        placeholder="Type your new password"
        error={errors.new_password}
        disabled={isSubmitting}
        {...register('new_password')}
      />

      <Field
        type="password"
        label="New password confirmation"
        leadingIcon="lock"
        placeholder="Confirm your new password"
        error={errors.new_password_confirmation}
        disabled={isSubmitting}
        {...register('new_password_confirmation')}
      />

      <Button
        type="submit"
        trailingIcon="arrow-right"
        disabled={isSubmitting}
        submiting={isSubmitting}
      >
        Save
      </Button>
    </form>
  )
}
