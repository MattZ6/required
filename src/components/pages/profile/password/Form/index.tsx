import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useToast } from '@hooks/useToast';

import { useUpdatePassword } from '@services/user/profile';

import { parseRequestError } from '@utils/parseRequestError';

import { AlertDialog } from '@components/AlertDialog';
import { PasswordFormField, FormButton } from '@components/form';

import { UpdatePasswordFormType, updatePasswordSchema } from './schema';
import { FormStyles as Styles } from './styles';

export function UpdateProfilePasswordForm() {
  const t = useTranslations('update-profile-password');
  const { mutateAsync } = useUpdatePassword();
  const [hasError, setHasError] = useState(false);
  const { addMessage } = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setFocus,
    setError,
  } = useForm<UpdatePasswordFormType>({
    resolver: zodResolver(updatePasswordSchema),
  });

  async function updatePassword(input: UpdatePasswordFormType) {
    try {
      await mutateAsync(input);

      addMessage({
        variant: 'success',
        title: t('messages.success.title'),
        content: t('messages.success.description'),
      });

      await router.push('/profile');
    } catch (error) {
      const parsedError = parseRequestError<UpdatePasswordFormType>(error);

      if (parsedError.error.validation) {
        const { field, message } = parsedError.error.validation;
        setError(field, { message });
        return;
      }

      if (parsedError.error.code === 'password.wrong') {
        setError('old_password', {
          message: 'update-profile-password.errors.old_password.wrong',
        });
        return;
      }

      setHasError(true);
    }
  }

  function onModalRequestClose() {
    setHasError(false);
    setFocus('old_password');
  }

  useEffect(() => setFocus('old_password'), [setFocus]);

  return (
    <>
      <Styles.Form onSubmit={handleSubmit(updatePassword)}>
        <PasswordFormField
          label={t('form.old_password.label')}
          placeholder={t('form.old_password.placeholder')}
          error={errors.old_password}
          disabled={isSubmitting}
          {...register('old_password')}
        />

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
