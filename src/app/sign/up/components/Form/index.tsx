'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useLayoutEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useAuthAtom } from '@hooks/useAuthAtom'
import { useSignIn } from '@hooks/useSignIn'
import { useSignUp } from '@hooks/useSignUp'

import { parseError } from '@utils/parseRequestError'

import { showAlert } from '@components/AlertDialogHandler'
import { Button } from '@components/Button'
import { Field } from '@components/Field'

import { signUpSchema, SignUpFormType } from './schema'
import styles from './styles.module.scss'

export function Form() {
  const router = useRouter()
  const { send: signIn } = useSignIn()
  const { send } = useSignUp()
  const [, setAuth] = useAuthAtom()
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setFocus,
    register,
    setError,
  } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpSchema),
  })

  async function authenticate(
    input: Pick<SignUpFormType, 'email' | 'password'>,
  ) {
    const { email, password } = input

    try {
      const authentication = await signIn({ email, password })

      setAuth(authentication)

      router.replace('/')
    } catch (error) {
      router.replace('/sign/in')

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

  async function signUp(input: SignUpFormType) {
    const { name, email, password, password_confirmation } = input

    try {
      await send({ name, email, password, password_confirmation })

      await authenticate({ email, password })
    } catch (error) {
      const requestError = parseError<SignUpFormType>(error)

      const { code, message, validation } = requestError.error

      if (code === 'validation' && validation) {
        const { field, message } = validation

        setTimeout(() => setError(field, { message }, { shouldFocus: true }), 0)

        return
      }

      if (code === 'user.email_in_use') {
        setTimeout(
          () => setError('email', { message }, { shouldFocus: true }),
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
          'It was not possible to complete the creation of your account at this time. You can try again at any time.',
        closeButtonText: 'Close',
      })
    }
  }

  useLayoutEffect(() => setFocus('name'), [setFocus])

  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit(signUp)}
      noValidate
    >
      <Field
        type="text"
        label="Whats your name?"
        leadingIcon="smiley"
        placeholder="Alejandro? Fernando? Roberto?"
        error={errors.name}
        disabled={isSubmitting}
        {...register('name')}
      />

      <Field
        type="email"
        label="Whats your e-mail?"
        leadingIcon="envelope"
        placeholder="Your best e-mail address"
        error={errors.email}
        disabled={isSubmitting}
        {...register('email')}
      />

      <Field
        type="password"
        label="Enter a password"
        leadingIcon="lock"
        placeholder="It will be our little secret 😉"
        error={errors.password}
        disabled={isSubmitting}
        {...register('password')}
      />

      <Field
        type="password"
        label="Confirm your password"
        leadingIcon="lock"
        placeholder="Passwords must be the same"
        error={errors.password_confirmation}
        disabled={isSubmitting}
        {...register('password_confirmation')}
      />

      <Button
        type="submit"
        trailingIcon="arrow-right"
        disabled={isSubmitting}
        submiting={isSubmitting}
      >
        Create account
      </Button>
    </form>
  )
}
