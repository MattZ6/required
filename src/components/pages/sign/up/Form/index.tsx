import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdMailOutline, MdOutlineEmojiEmotions } from 'react-icons/md';

import { useAuth } from '@hooks/useAuth';

import { useCreateAccount } from '@services/user/auth';

import { parseRequestError } from '@utils/parseRequestError';

import { AlertDialog } from '@components/AlertDialog';
import { FormField, PasswordFormField, FormButton } from '@components/form';

import { SignUpFormType, signUpSchema } from './schema';
import { FormStyles as Styles } from './styles';

export function SignUpForm() {
  const t = useTranslations('sign-up');
  const { mutateAsync } = useCreateAccount();
  const { signIn } = useAuth();
  const [hasError, setHasError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setFocus,
    setError,
  } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpSchema),
  });

  async function signUp(input: SignUpFormType) {
    try {
      await mutateAsync({
        name: input.name,
        email: input.email,
        password: input.password,
        password_confirmation: input.password_confirmation,
      });

      await signIn({
        email: input.email,
        password: input.password,
      });
    } catch (error) {
      const parsedError = parseRequestError<SignUpFormType>(error);

      if (parsedError.error.validation) {
        const { field, message } = parsedError.error.validation;
        setError(field, { message });
        return;
      }

      if (parsedError.error.code === 'user.exists') {
        setError('email', { message: 'sign-up.errors.email.already_exists' });
        return;
      }

      setHasError(true);
    }
  }

  function onModalRequestClose() {
    setHasError(false);
    setFocus('name');
  }

  useEffect(() => setFocus('name'), [setFocus]);

  return (
    <>
      <Styles.Form onSubmit={handleSubmit(signUp)}>
        <FormField
          label={t('form.name.label')}
          placeholder={t('form.name.placeholder')}
          icon={MdOutlineEmojiEmotions}
          error={errors.name}
          disabled={isSubmitting}
          {...register('name')}
        />

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

        <PasswordFormField
          label={t('form.password_confirmation.label')}
          placeholder={t('form.password_confirmation.placeholder')}
          error={errors.password_confirmation}
          disabled={isSubmitting}
          {...register('password_confirmation')}
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
  );
}
