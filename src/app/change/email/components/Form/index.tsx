'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useLayoutEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useUpdateEmail } from '@hooks/useUpdateEmail'

import { parseError } from '@utils/parseRequestError'

import { showAlert } from '@components/AlertDialogHandler'
import { Button } from '@components/Button'
import { Field } from '@components/Field'

import { changeEmailSchema, ChangeEmailFormType } from './schema'
import styles from './styles.module.scss'

export function Form() {
  const router = useRouter()
  const { send } = useUpdateEmail()
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setFocus,
    register,
    setError,
  } = useForm<ChangeEmailFormType>({
    resolver: zodResolver(changeEmailSchema),
  })

  async function signIn(input: ChangeEmailFormType) {
    const { email } = input

    try {
      await send({ email })

      // @TODO: Adicionar um toast com uma mensagem de sucesso

      router.replace('/')
    } catch (error) {
      const requestError = parseError<ChangeEmailFormType>(error)

      const { code, validation } = requestError.error

      if (code === 'validation' && validation) {
        const { field, message } = validation

        setTimeout(() => setError(field, { message }, { shouldFocus: true }), 0)

        return
      }

      if (
        (code === 'user.exists' || code === 'user.email_in_use') &&
        validation
      ) {
        const { message } = validation

        setTimeout(
          () => setError('email', { message }, { shouldFocus: true }),
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
          'It was not possible to change your email address at this time. You can try again at any time.',
        closeButtonText: 'Close',
      })
    }
  }

  useLayoutEffect(() => setFocus('email'), [setFocus])

  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit(signIn)}
      noValidate
    >
      <Field
        type="email"
        label="E-mail address"
        leadingIcon="envelope"
        placeholder="Type your new e-mail address"
        error={errors.email}
        disabled={isSubmitting}
        {...register('email')}
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
