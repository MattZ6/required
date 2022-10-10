import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdMailOutline } from 'react-icons/md';
import * as yup from 'yup';

import { focusFirstInputWithError } from '@utils/focusFirstInputWithError';
import { setFocusOnInput } from '@utils/setFocusOnInput';

import { FormField, FormButton } from '@components/form';

import { FormStyles as Styles } from './styles';

export function PasswordRecoveryForm() {
  const t = useTranslations('password-recovery-page');

  const schema = yup.object().shape({
    email: yup
      .string()
      .required(t('errors.email.required'))
      .email(t('errors.email.invalid')),
  });

  const { register, handleSubmit, formState } = useForm<{ email: string }>({
    resolver: yupResolver(schema),
  });

  const forgotPassword: SubmitHandler<any> = async () => {
    // TODO:
  };

  useEffect(() => {
    setFocusOnInput('email');
  }, []);

  return (
    <Styles.Form
      onSubmit={handleSubmit(forgotPassword, focusFirstInputWithError)}
    >
      <FormField
        label={t('form.email.label')}
        placeholder={t('form.email.placeholder')}
        icon={MdMailOutline}
        error={formState.errors.email}
        disabled={formState.isSubmitting}
        {...register('email')}
      />

      <Styles.Actions>
        <FormButton type="submit">{t('form.submit')}</FormButton>
      </Styles.Actions>
    </Styles.Form>
  );
}
