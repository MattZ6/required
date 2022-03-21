import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdMailOutline } from 'react-icons/md';
import * as yup from 'yup';

import { useAuth } from '@hooks/useAuth';
import { useTranslation } from '@hooks/useTranslation';

import { focusFirstInputWithError } from '@utils/focusFirstInputWithError';
import { parseRequestError } from '@utils/parseRequestError';

import { FormField, PasswordFormField, FormButton } from '@components/form';
import { AlertDialog } from '@components/AlertDialog';

import { FormStyles as Styles } from './styles';

const emailFormFieldName = 'email';
const passwordFormFieldName = 'password';

const PASSWORD_MIN_LENGTH = 6;

type SignInFormData = {
  email: string;
  password: string;
};

export function SignInForm() {
  const { signIn, isAuthenticated } = useAuth();
  const t = useTranslation('sign-in');
  const [hasError, setHasError] = useState(false);

  const schema = yup.object().shape({
    [emailFormFieldName]: yup
      .string()
      .required(t('errors.email.required'))
      .email(t('errors.email.invalid')),
    [passwordFormFieldName]: yup
      .string()
      .required(t('errors.password.required'))
      .min(
        6,
        t('errors.password.minlength', { minlength: PASSWORD_MIN_LENGTH })
      ),
  });

  const { register, handleSubmit, formState, setFocus, setError } =
    useForm<SignInFormData>({
      resolver: yupResolver(schema),
    });

  const submit: SubmitHandler<SignInFormData> = async data => {
    try {
      await signIn(data);
    } catch (err) {
      const error = parseRequestError(err);

      if (error.error.validation) {
        const { type } = error.error.validation;
        const field = error.error.validation.field as keyof SignInFormData;

        setError(field, {
          message: t(`errors.${field}.${type}`, {
            minlength: PASSWORD_MIN_LENGTH,
          }),
        });

        setTimeout(() => {
          setFocus(field);
        }, 0);

        return;
      }

      if (error.error.code === 'user.not.exists') {
        const field = emailFormFieldName;

        setError(field, { message: t('errors.email.not_exists') });

        setTimeout(() => {
          setFocus(field);
        }, 0);

        return;
      }

      if (error.error.code === 'password.wrong') {
        const field = passwordFormFieldName;

        setError(field, { message: t('errors.password.wrong') });

        setTimeout(() => {
          setFocus(field);
        }, 0);

        return;
      }

      setHasError(true);
    }
  };

  function onModalRequestClose() {
    setHasError(false);

    setTimeout(() => {
      setFocus('email');
    }, 0);
  }

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  return (
    <>
      <Styles.Form onSubmit={handleSubmit(submit, focusFirstInputWithError)}>
        <FormField
          label={t('form.email.label')}
          placeholder={t('form.email.placeholder')}
          type="email"
          icon={MdMailOutline}
          error={formState.errors[emailFormFieldName]}
          disabled={formState.isSubmitting || isAuthenticated}
          {...register(emailFormFieldName)}
        />

        <PasswordFormField
          label={t('form.password.label')}
          placeholder={t('form.password.placeholder')}
          error={formState.errors[passwordFormFieldName]}
          disabled={formState.isSubmitting || isAuthenticated}
          {...register(passwordFormFieldName)}
        />

        <Styles.Actions>
          <FormButton
            type="submit"
            disabled={formState.isSubmitting || isAuthenticated}
            showLoading={formState.isSubmitting || isAuthenticated}
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
        onOpenChange={onModalRequestClose}
      />
    </>
  );
}
