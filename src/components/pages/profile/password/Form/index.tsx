import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useTranslation } from '@hooks/useTranslation';

import { focusFirstInputWithError } from '@utils/focusFirstInputWithError';
import { setFocusOnInput } from '@utils/setFocusOnInput';

import { PasswordFormField, FormButton } from '@components/form';

import { FormStyles as Styles } from './styles';

const currentPasswordFieldName = 'current_password';
const newPasswordFieldName = 'new_password';
const newPasswordConfirmationFieldName = 'new_password_confirmation';

export function UpdateProfilePasswordForm() {
  const commonT = useTranslation('common');
  const t = useTranslation('update-profile-password');

  const schema = yup.object().shape({
    [currentPasswordFieldName]: yup
      .string()
      .required(t('errors.current_password.required'))
      .min(6, commonT('errors.min', { count: 6 })),
    [newPasswordFieldName]: yup
      .string()
      .required(t('errors.new_password.required'))
      .min(6, commonT('errors.min', { count: 6 })),
    [newPasswordConfirmationFieldName]: yup
      .string()
      .required(t('errors.new_password_confirmation.required'))
      .min(6, commonT('errors.min', { count: 6 })),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const updatePassword: SubmitHandler<any> = async () => {
    // TODO:
  };

  useEffect(() => {
    setFocusOnInput(currentPasswordFieldName);
  }, []);

  return (
    <Styles.Form
      onSubmit={handleSubmit(updatePassword, focusFirstInputWithError)}
    >
      <PasswordFormField
        label={t('form.current_password.label')}
        placeholder={t('form.current_password.placeholder')}
        error={formState.errors[currentPasswordFieldName]}
        disabled={formState.isSubmitting}
        {...register(currentPasswordFieldName)}
      />

      <PasswordFormField
        label={t('form.new_password.label')}
        placeholder={t('form.new_password.placeholder')}
        error={formState.errors[newPasswordFieldName]}
        disabled={formState.isSubmitting}
        {...register(newPasswordFieldName)}
      />

      <PasswordFormField
        label={t('form.new_password_confirmation.label')}
        placeholder={t('form.new_password_confirmation.placeholder')}
        error={formState.errors[newPasswordConfirmationFieldName]}
        disabled={formState.isSubmitting}
        {...register(newPasswordConfirmationFieldName)}
      />

      <Styles.Actions>
        <FormButton type="submit">{t('form.submit')}</FormButton>
      </Styles.Actions>
    </Styles.Form>
  );
}
