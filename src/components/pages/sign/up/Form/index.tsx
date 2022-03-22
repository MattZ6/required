import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdMailOutline, MdOutlineEmojiEmotions } from 'react-icons/md';
import * as yup from 'yup';

import { useAuth } from '@hooks/useAuth';
import { useTranslation } from '@hooks/useTranslation';

import { useCreateAccount } from '@services/user/auth';

import { NAME_MIN_LENGTH, PASSWORD_MIN_LENGTH } from '@utils/constants';
import { focusFirstInputWithError } from '@utils/focusFirstInputWithError';
import { parseRequestError } from '@utils/parseRequestError';

import { AlertDialog } from '@components/AlertDialog';
import { FormField, PasswordFormField, FormButton } from '@components/form';

import { FormStyles as Styles } from './styles';

const NAME_FORM_FIELD = 'name';
const EMAIL_FORM_FIELD = 'email';
const PASSWORD_FORM_FIELD = 'password';
const PASSWORD_CONFIRMATION_FORM_FIELD = 'password_confirmation';

type SignUpFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export function SignUpForm() {
  const t = useTranslation('sign-up');
  const { mutateAsync } = useCreateAccount();
  const { signIn, isAuthenticated } = useAuth();
  const [hasError, setHasError] = useState(false);

  const schema = yup.object().shape({
    [NAME_FORM_FIELD]: yup
      .string()
      .trim()
      .required(t('errors.name.required'))
      .min(
        NAME_MIN_LENGTH,
        t('errors.name.minlength', { minlength: NAME_MIN_LENGTH })
      ),
    [EMAIL_FORM_FIELD]: yup
      .string()
      .required(t('errors.email.required'))
      .email(t('errors.email.invalid')),
    [PASSWORD_FORM_FIELD]: yup
      .string()
      .required(t('errors.password.required'))
      .min(
        PASSWORD_MIN_LENGTH,
        t('errors.password.minlength', { minlength: PASSWORD_MIN_LENGTH })
      ),
    [PASSWORD_CONFIRMATION_FORM_FIELD]: yup
      .string()
      .required(t('errors.password_confirmation.required'))
      .min(
        PASSWORD_MIN_LENGTH,
        t('errors.password_confirmation.minlength', {
          minlength: PASSWORD_MIN_LENGTH,
        })
      )
      .oneOf(
        [yup.ref(PASSWORD_FORM_FIELD)],
        t('errors.password_confirmation.divergent')
      ),
  });

  const { register, handleSubmit, formState, setFocus, setError } =
    useForm<SignUpFormData>({
      resolver: yupResolver(schema),
    });

  const signUp: SubmitHandler<SignUpFormData> = async data => {
    try {
      await mutateAsync({
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation,
      });

      await signIn({
        email: data.email,
        password: data.password,
      });
    } catch (err) {
      const error = parseRequestError(err);

      if (error.error.validation) {
        const { type } = error.error.validation;
        const field = error.error.validation.field as keyof SignUpFormData;

        setError(field, {
          message: t(`errors.${field}.${type}`, {
            minlength: field === 'name' ? NAME_MIN_LENGTH : PASSWORD_MIN_LENGTH,
          }),
        });

        setTimeout(() => {
          setFocus(field);
        }, 0);

        return;
      }

      if (error.error.code === 'user.exists') {
        const field = EMAIL_FORM_FIELD;

        setError(field, { message: t('errors.email.already_exists') });

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
      setFocus('name');
    }, 0);
  }

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  return (
    <>
      <Styles.Form onSubmit={handleSubmit(signUp, focusFirstInputWithError)}>
        <FormField
          label={t('form.name.label')}
          placeholder={t('form.name.placeholder')}
          icon={MdOutlineEmojiEmotions}
          error={formState.errors[NAME_FORM_FIELD]}
          disabled={formState.isSubmitting || isAuthenticated}
          {...register(NAME_FORM_FIELD)}
        />

        <FormField
          label={t('form.email.label')}
          placeholder={t('form.email.placeholder')}
          type="email"
          icon={MdMailOutline}
          error={formState.errors[EMAIL_FORM_FIELD]}
          disabled={formState.isSubmitting || isAuthenticated}
          {...register(EMAIL_FORM_FIELD)}
        />

        <PasswordFormField
          label={t('form.password.label')}
          placeholder={t('form.password.placeholder')}
          error={formState.errors[PASSWORD_FORM_FIELD]}
          disabled={formState.isSubmitting || isAuthenticated}
          {...register(PASSWORD_FORM_FIELD)}
        />

        <PasswordFormField
          label={t('form.password_confirmation.label')}
          placeholder={t('form.password_confirmation.placeholder')}
          error={formState.errors[PASSWORD_CONFIRMATION_FORM_FIELD]}
          disabled={formState.isSubmitting || isAuthenticated}
          {...register(PASSWORD_CONFIRMATION_FORM_FIELD)}
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
        onOpenChange={() => onModalRequestClose()}
      />
    </>
  );
}
