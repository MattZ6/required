import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlineEmojiEmotions } from 'react-icons/md';

import { useToast } from '@hooks/useToast';

import { useProfile, useUpdateName } from '@services/user/profile';

import { parseRequestError } from '@utils/parseRequestError';

import { AlertDialog } from '@components/AlertDialog';
import { FormField, FormButton } from '@components/form';

import { UpdateNameFormType, updateNameSchema } from './schema';
import { FormStyles as Styles } from './styles';

export function UpdateProfileNameForm() {
  const { addMessage } = useToast();

  const t = useTranslations('update-profile-name');
  const [hasError, setHasError] = useState(false);
  const router = useRouter();

  const { isLoading, data: profile } = useProfile();
  const { mutateAsync } = useUpdateName();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setFocus,
    setError,
  } = useForm<UpdateNameFormType>({
    resolver: zodResolver(updateNameSchema),
    defaultValues: { name: profile?.name },
  });

  async function updateName(input: UpdateNameFormType) {
    try {
      await mutateAsync({ name: input.name.trim() });

      addMessage({
        variant: 'success',
        title: t('messages.success.title'),
        content: t('messages.success.description'),
      });

      await router.push('/profile');
    } catch (error) {
      const parsedError = parseRequestError<UpdateNameFormType>(error);

      if (parsedError.error.validation) {
        const { field, message } = parsedError.error.validation;
        setError(field, { message });
        return;
      }

      setHasError(true);
    }
  }

  function onModalRequestClose() {
    setHasError(false);
    setFocus('name');
  }

  useEffect(() => setFocus('name'), [setFocus]);

  return (
    <>
      <Styles.Form onSubmit={handleSubmit(updateName)}>
        <FormField
          label={t('form.name.label')}
          placeholder={t('form.name.placeholder')}
          icon={MdOutlineEmojiEmotions}
          error={errors.name}
          disabled={isLoading || isSubmitting}
          {...register('name')}
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
