import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdMailOutline } from 'react-icons/md';
import * as yup from 'yup';

import { useAuth } from '@hooks/useAuth';
import { useTranslation } from '@hooks/useTranslation';

import { focusFirstInputWithError } from '@utils/focusFirstInputWithError';
import { setFocusOnInput } from '@utils/setFocusOnInput';

import { FormField, PasswordFormField, FormButton } from '@components/form';

import { FormStyles as Styles } from './styles';

const emailFormFieldName = 'email';
const passwordFormFieldName = 'password';

type SignInFormDate = {
  email: string;
  password: string;
};

export function SignInForm() {
  const { signIn } = useAuth();
  const t = useTranslation('sign-in');

  const schema = yup.object().shape({
    [emailFormFieldName]: yup
      .string()
      .required(t('errors.email.required'))
      .email(t('errors.email.invalid')),
    [passwordFormFieldName]: yup
      .string()
      .required(t('errors.password.required'))
      .min(6, t('errors.password.min', { count: 6 })),
  });

  const { register, handleSubmit, formState } = useForm<SignInFormDate>({
    resolver: yupResolver(schema),
  });

  const submit: SubmitHandler<SignInFormDate> = async data => {
    try {
      await signIn(data);
    } catch (error) {
      // TODO: Tratar os erros
    }
  };

  useEffect(() => {
    setFocusOnInput(emailFormFieldName);
  }, []);

  return (
    <Styles.Form onSubmit={handleSubmit(submit, focusFirstInputWithError)}>
      <FormField
        label={t('form.email.label')}
        placeholder={t('form.email.placeholder')}
        type="email"
        icon={MdMailOutline}
        error={formState.errors[emailFormFieldName]}
        disabled={formState.isSubmitting || formState.isSubmitSuccessful}
        {...register(emailFormFieldName)}
      />

      <PasswordFormField
        label={t('form.password.label')}
        placeholder={t('form.password.placeholder')}
        error={formState.errors[passwordFormFieldName]}
        disabled={formState.isSubmitting || formState.isSubmitSuccessful}
        {...register(passwordFormFieldName)}
      />

      <Styles.Actions>
        <FormButton type="submit">{t('form.submit')}</FormButton>
      </Styles.Actions>
    </Styles.Form>
  );
}
