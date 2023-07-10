'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useLayoutEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useUpdateName } from '@hooks/useUpdateName'

import { parseError } from '@utils/parseRequestError'

import { showAlert } from '@components/AlertDialogHandler'
import { Button } from '@components/Button'
import { Field } from '@components/Field'

import { changeNameSchema, ChangeNameFormType } from './schema'
import styles from './styles.module.scss'

export function Form() {
  const router = useRouter()
  const { send } = useUpdateName()
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setFocus,
    register,
    setError,
  } = useForm<ChangeNameFormType>({
    resolver: zodResolver(changeNameSchema),
  })

  async function signIn(input: ChangeNameFormType) {
    const { name } = input

    try {
      await send({ name })

      // @TODO: Adicionar um toast com uma mensagem de sucesso

      router.replace('/')
    } catch (error) {
      const requestError = parseError<ChangeNameFormType>(error)

      const { code, validation } = requestError.error

      if (code === 'validation' && validation) {
        const { field, message } = validation

        setTimeout(() => setError(field, { message }, { shouldFocus: true }), 0)

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

      // @todo: add token.invalid error message

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

  useLayoutEffect(() => setFocus('name'), [setFocus])

  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit(signIn)}
      noValidate
    >
      <Field
        type="text"
        label="Name"
        leadingIcon="smiley"
        placeholder="Type your name"
        error={errors.name}
        disabled={isSubmitting}
        {...register('name')}
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
