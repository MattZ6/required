import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useToast } from '@hooks/useToast';

import { useUpdatePassword } from '@services/user/profile';

import { PASSWORD_MIN_LENGTH } from '@utils/constants';
import { focusFirstInputWithError } from '@utils/focusFirstInputWithError';
import { parseRequestError } from '@utils/parseRequestError';

import { AlertDialog } from '@components/AlertDialog';
import { PasswordFormField, FormButton } from '@components/form';

import { FormStyles as Styles } from './styles';

const oldPasswordFieldName = 'old_password';
const newPasswordFieldName = 'new_password';
const newPasswordConfirmationFieldName = 'new_password_confirmation';

type UpdatePasswordFormData = {
  old_password: string;
  new_password: string;
  new_password_confirmation: string;
};

export function UpdateProfilePasswordForm() {
  const commonT = useTranslations('common');
  const t = useTranslations('update-profile-password');
  const { mutateAsync } = useUpdatePassword();
  const [hasError, setHasError] = useState(false);
  const { addMessage } = useToast();
  const router = useRouter();

  const schema = yup.object().shape({
    [oldPasswordFieldName]: yup
      .string()
      .required(t('errors.old_password.required'))
      .min(
        PASSWORD_MIN_LENGTH,
        commonT('errors.min', { count: PASSWORD_MIN_LENGTH })
      ),
    [newPasswordFieldName]: yup
      .string()
      .required(t('errors.new_password.required'))
      .min(
        PASSWORD_MIN_LENGTH,
        commonT('errors.min', { count: PASSWORD_MIN_LENGTH })
      ),
    [newPasswordConfirmationFieldName]: yup
      .string()
      .required(t('errors.new_password_confirmation.required'))
      .min(
        PASSWORD_MIN_LENGTH,
        commonT('errors.min', { count: PASSWORD_MIN_LENGTH })
      ),
  });

  const form = useForm<UpdatePasswordFormData>({
    resolver: yupResolver(schema),
  });

  const updatePassword: SubmitHandler<UpdatePasswordFormData> = async data => {
    try {
      await mutateAsync(data);

      addMessage({
        variant: 'success',
        title: t('messages.success.title'),
        content: t('messages.success.description'),
      });

      await router.push('/profile');
    } catch (err) {
      const error = parseRequestError(err);

      if (error.error.validation) {
        const { type, value } = error.error.validation;
        const field = error.error.validation
          .field as keyof UpdatePasswordFormData;

        form.setError(field, {
          message: t(`errors.${field}.${type}` as any, {
            minlength: type === 'minlength' ? value : null,
          }),
        });

        setTimeout(() => {
          form.setFocus(field);
        }, 0);

        return;
      }

      if (error.error.code === 'password.wrong') {
        form.setError('old_password', {
          message: t('errors.old_password.wrong'),
        });

        setTimeout(() => {
          form.setFocus('old_password');
        }, 0);

        return;
      }

      setHasError(true);
    }
  };

  function onModalRequestClose() {
    setHasError(false);

    setTimeout(() => {
      form.setFocus('old_password');
    }, 0);
  }

  useEffect(() => {
    setTimeout(() => {
      form.setFocus('old_password');
    }, 0);
  }, [form]);

  return (
    <>
      <Styles.Form
        onSubmit={form.handleSubmit(updatePassword, focusFirstInputWithError)}
      >
        <PasswordFormField
          label={t('form.old_password.label')}
          placeholder={t('form.old_password.placeholder')}
          error={form.formState.errors[oldPasswordFieldName]}
          disabled={form.formState.isSubmitting}
          {...form.register(oldPasswordFieldName)}
        />

        <PasswordFormField
          label={t('form.new_password.label')}
          placeholder={t('form.new_password.placeholder')}
          error={form.formState.errors[newPasswordFieldName]}
          disabled={form.formState.isSubmitting}
          {...form.register(newPasswordFieldName)}
        />

        <PasswordFormField
          label={t('form.new_password_confirmation.label')}
          placeholder={t('form.new_password_confirmation.placeholder')}
          error={form.formState.errors[newPasswordConfirmationFieldName]}
          disabled={form.formState.isSubmitting}
          {...form.register(newPasswordConfirmationFieldName)}
        />

        <Styles.Actions>
          <FormButton type="submit">{t('form.submit')}</FormButton>
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
