import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdMailOutline } from 'react-icons/md';
import * as yup from 'yup';

import { useToast } from '@hooks/useToast';

import { useProfile, useUpdateEmail } from '@services/user/profile';

import { focusFirstInputWithError } from '@utils/focusFirstInputWithError';
import { parseRequestError } from '@utils/parseRequestError';

import { AlertDialog } from '@components/AlertDialog';
import { FormField, FormButton } from '@components/form';

import { FormStyles as Styles } from './styles';

type UpdateEmailFormData = {
  email: string;
};

const emailFieldName = 'email';

export function UpdateProfileEmailForm() {
  const t = useTranslations('update-profile-email');
  const { addMessage } = useToast();
  const [hasError, setHasError] = useState(false);
  const { isLoading, data: profile } = useProfile();
  const { mutateAsync } = useUpdateEmail();
  const router = useRouter();

  const schema = yup.object().shape({
    [emailFieldName]: yup
      .string()
      .required(t('errors.email.required'))
      .email(t('errors.email.invalid')),
  });

  const form = useForm<UpdateEmailFormData>({
    resolver: yupResolver(schema),
  });

  const updateEmail: SubmitHandler<UpdateEmailFormData> = async data => {
    try {
      await mutateAsync({ email: data.email.trim() });

      addMessage({
        variant: 'success',
        title: t('messages.success.title'),
        content: t('messages.success.description'),
      });

      await router.push('/profile');
    } catch (err) {
      const error = parseRequestError(err);

      if (error.error.validation) {
        const { type } = error.error.validation;
        const field = error.error.validation.field as keyof UpdateEmailFormData;

        form.setError(field, {
          message: t(`errors.${field}.${type}` as any),
        });

        setTimeout(() => {
          form.setFocus(field);
        }, 0);

        return;
      }

      if (error.error.code === 'user.exists') {
        form.setError('email', { message: t('errors.email.already_exists') });

        setTimeout(() => {
          form.setFocus('email');
        }, 0);

        return;
      }

      setHasError(true);
    }
  };

  function onModalRequestClose() {
    setHasError(false);

    setTimeout(() => {
      form.setFocus('email');
    }, 0);
  }

  useEffect(() => {
    if (profile) {
      form.setValue('email', profile.email);

      setTimeout(() => {
        form.setFocus('email');
      }, 0);
    }
  }, [profile, form]);

  return (
    <>
      <Styles.Form
        onSubmit={form.handleSubmit(updateEmail, focusFirstInputWithError)}
      >
        <FormField
          label={t('form.email.label')}
          placeholder={t('form.email.placeholder')}
          icon={MdMailOutline}
          error={form.formState.errors[emailFieldName]}
          disabled={isLoading || form.formState.isSubmitting}
          {...form.register(emailFieldName)}
        />

        <Styles.Actions>
          <FormButton
            type="submit"
            disabled={isLoading || form.formState.isSubmitting}
            showLoading={form.formState.isSubmitting}
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
