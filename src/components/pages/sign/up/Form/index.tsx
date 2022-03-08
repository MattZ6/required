import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdMailOutline, MdOutlineEmojiEmotions } from 'react-icons/md';
import * as yup from 'yup';

import { useAuth } from '@hooks/useAuth';
import { useTranslation } from '@hooks/useTranslation';

import { useCreateAccount } from '@services/user/auth';

import { focusFirstInputWithError } from '@utils/focusFirstInputWithError';
import { setFocusOnInput } from '@utils/setFocusOnInput';

import { FormField, PasswordFormField, FormButton } from '@components/form';

import { FormStyles as Styles } from './styles';

const nameFormFieldName = 'name';
const emailFormFieldName = 'email';
const passwordFormFieldName = 'password';

type SignUpFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export function SignUpForm() {
  const t = useTranslation('sign-up');
  const { isSuccess, mutateAsync } = useCreateAccount();
  const { signIn } = useAuth();

  const schema = yup.object().shape({
    [nameFormFieldName]: yup
      .string()
      .trim()
      .required(t('errors.name.required'))
      .min(3, t('errors.name.min', { count: 3 })),
    [emailFormFieldName]: yup
      .string()
      .required(t('errors.email.required'))
      .email(t('errors.email.invalid')),
    [passwordFormFieldName]: yup
      .string()
      .required(t('errors.password.required'))
      .min(6, t('errors.password.min', { count: 6 })),
  });

  const { register, handleSubmit, formState } = useForm<SignUpFormData>({
    resolver: yupResolver(schema),
  });

  const signUp: SubmitHandler<SignUpFormData> = async data => {
    try {
      await mutateAsync({
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.password,
      });

      await signIn({
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      // TODO: Tratar os erros
      console.log(error);
    }
  };

  useEffect(() => {
    setFocusOnInput(nameFormFieldName);
  }, []);

  return (
    <Styles.Form onSubmit={handleSubmit(signUp, focusFirstInputWithError)}>
      <FormField
        label={t('form.name.label')}
        placeholder={t('form.name.placeholder')}
        icon={MdOutlineEmojiEmotions}
        error={formState.errors[nameFormFieldName]}
        disabled={formState.isSubmitting || isSuccess}
        {...register(nameFormFieldName)}
      />

      <FormField
        label={t('form.email.label')}
        placeholder={t('form.email.placeholder')}
        type="email"
        icon={MdMailOutline}
        error={formState.errors[emailFormFieldName]}
        disabled={formState.isSubmitting || isSuccess}
        {...register(emailFormFieldName)}
      />

      <PasswordFormField
        label={t('form.password.label')}
        placeholder={t('form.password.placeholder')}
        error={formState.errors[passwordFormFieldName]}
        disabled={formState.isSubmitting}
        {...register(passwordFormFieldName)}
      />

      <Styles.Actions>
        <FormButton type="submit">{t('form.submit')}</FormButton>
      </Styles.Actions>
    </Styles.Form>
  );
}
