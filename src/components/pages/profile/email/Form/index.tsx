import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdMailOutline } from 'react-icons/md';

import { useToast } from '@hooks/useToast';

import { useProfile, useUpdateEmail } from '@services/user/profile';

import { parseRequestError } from '@utils/parseRequestError';

import { AlertDialog } from '@components/AlertDialog';
import { FormField, FormButton } from '@components/form';

import { UpdateEmailFormType, updateEmailSchema } from './schema';
import { FormStyles as Styles } from './styles';

export function UpdateProfileEmailForm() {
  const t = useTranslations('update-profile-email');
  const { addMessage } = useToast();
  const [hasError, setHasError] = useState(false);
  const { isLoading, data: profile } = useProfile();
  const { mutateAsync } = useUpdateEmail();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setFocus,
    setError,
  } = useForm<UpdateEmailFormType>({
    resolver: zodResolver(updateEmailSchema),
    defaultValues: {
      email: profile?.email,
    },
  });

  async function updateEmail(input: UpdateEmailFormType) {
    try {
      await mutateAsync({ email: input.email.trim() });

      addMessage({
        variant: 'success',
        title: t('messages.success.title'),
        content: t('messages.success.description'),
      });

      await router.push('/profile');
    } catch (error) {
      const parsedError = parseRequestError<UpdateEmailFormType>(error);

      if (parsedError.error.validation) {
        const { field, message } = parsedError.error.validation;
        setError(field, { message });
        return;
      }

      if (parsedError.error.code === 'user.exists') {
        setError('email', {
          message: 'update-profile-email.errors.email.already_exists',
        });
        return;
      }

      setHasError(true);
    }
  }

  function onModalRequestClose() {
    setHasError(false);
    setFocus('email');
  }

  useEffect(() => setFocus('email'), [setFocus]);

  return (
    <>
      <Styles.Form onSubmit={handleSubmit(updateEmail)}>
        <FormField
          label={t('form.email.label')}
          placeholder={t('form.email.placeholder')}
          icon={MdMailOutline}
          error={errors.email}
          disabled={isLoading || isSubmitting}
          {...register('email')}
        />

        <Styles.Actions>
          <FormButton
            type="submit"
            disabled={isLoading || isSubmitting}
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
