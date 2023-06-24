'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useLayoutEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useAuthAtom } from '@hooks/useAuthAtom'
import { useSignIn } from '@hooks/useSignIn'

import { parseError } from '@utils/parseRequestError'

import { showAlert } from '@components/AlertDialogHandler'
import { Button } from '@components/Button'
import { Field } from '@components/Field'

import { signInSchema, SignInFormType } from './schema'
import styles from './styles.module.scss'

export function Form() {
  const router = useRouter()
  const [, setAuth] = useAuthAtom()
  const { send } = useSignIn()
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setFocus,
    register,
    setError,
  } = useForm<SignInFormType>({
    resolver: zodResolver(signInSchema),
  })

  async function signIn(input: SignInFormType) {
    const { email, password } = input

    try {
      const authentication = await send({ email, password })

      setAuth(authentication)

      router.replace('/')
    } catch (error) {
      const requestError = parseError<SignInFormType>(error)

      const { code, message, validation } = requestError.error

      if (code === 'validation' && validation) {
        const { field, message } = validation

        setTimeout(() => setError(field, { message }, { shouldFocus: true }), 0)

        return
      }

      if (code === 'user.not.exists') {
        setTimeout(
          () => setError('email', { message }, { shouldFocus: true }),
          0,
        )

        return
      }

      if (code === 'password.wrong') {
        setTimeout(
          () => setError('password', { message }, { shouldFocus: true }),
          0,
        )

        return
      }

      if (!navigator.onLine) {
        showAlert({
          type: 'error',
          icon: 'ph-wifi-x',
          title: 'You seem to be offline',
          description: 'Please check your internet connection and try again.',
          closeButtonText: 'Ok',
        })

        return
      }

      showAlert({
        type: 'error',
        icon: 'ph-warning-circle',
        title: 'Ooops... Something went wrong!',
        description:
          'Your login could not be completed at this time. You can try again at any time.',
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
        placeholder="Just type your e-mail bro"
        error={errors.email}
        disabled={isSubmitting}
        {...register('email')}
      />

      <Field
        type="password"
        label="Password"
        leadingIcon="lock"
        placeholder="I won't tell anyone 🤫"
        error={errors.password}
        disabled={isSubmitting}
        {...register('password')}
      />

      <Button
        type="submit"
        trailingIcon="arrow-right"
        disabled={isSubmitting}
        submiting={isSubmitting}
      >
        Sign in
      </Button>
    </form>
  )
}
