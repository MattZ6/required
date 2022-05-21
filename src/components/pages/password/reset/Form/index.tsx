import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { focusFirstInputWithError } from '@utils/focusFirstInputWithError';
import { setFocusOnInput } from '@utils/setFocusOnInput';

import { PasswordFormField, FormButton } from '@components/form';

import { FormStyles as Styles } from './styles';

const newPasswordFieldName = 'new_password';
const newPasswordConfirmationFieldName = 'new_password_confirmation';

export function PasswordResetForm() {
  const commonT = useTranslations('common');
  const t = useTranslations('password-reset-page');

  const schema = yup.object().shape({
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
    setFocusOnInput(newPasswordFieldName);
  }, []);

  return (
    <Styles.Form
      onSubmit={handleSubmit(updatePassword, focusFirstInputWithError)}
    >
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
