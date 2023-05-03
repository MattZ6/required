'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useLayoutEffect } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@components/Button'
import { Field } from '@components/Field'

import { signInSchema, SignInFormType } from './schema'
import styles from './styles.module.scss'

export function Form() {
  const {
    handleSubmit,
    formState: { errors },
    setFocus,
    register,
  } = useForm<SignInFormType>({
    resolver: zodResolver(signInSchema),
  })

  function signIn(input: SignInFormType) {}

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
        leadingIcon="envelope-simple"
        placeholder="Just type your e-mail bro"
        error={errors.email}
        {...register('email')}
      />

      <Field
        type="password"
        label="Password"
        leadingIcon="lock-simple"
        placeholder="I won't tell anyone 🤫"
        error={errors.password}
        {...register('password')}
      />

      <Button type="submit" trailingIcon="arrow-right">
        Sign in
      </Button>
    </form>
  )
}
