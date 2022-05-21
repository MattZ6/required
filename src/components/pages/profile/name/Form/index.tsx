import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import * as yup from 'yup';

import { useToast } from '@hooks/useToast';

import { useProfile, useUpdateName } from '@services/user/profile';

import { NAME_MIN_LENGTH } from '@utils/constants';
import { focusFirstInputWithError } from '@utils/focusFirstInputWithError';
import { parseRequestError } from '@utils/parseRequestError';

import { AlertDialog } from '@components/AlertDialog';
import { FormField, FormButton } from '@components/form';

import { FormStyles as Styles } from './styles';

type UpdateNameFormData = {
  name: string;
};

const nameFieldName = 'name';

export function UpdateProfileNameForm() {
  const { addMessage } = useToast();

  const t = useTranslations('update-profile-name');
  const [hasError, setHasError] = useState(false);
  const router = useRouter();

  const { isLoading, data: profile } = useProfile();
  const { mutateAsync } = useUpdateName();

  const schema = yup.object().shape({
    [nameFieldName]: yup
      .string()
      .trim()
      .required(t('errors.name.required'))
      .min(
        NAME_MIN_LENGTH,
        t('errors.name.minlength', { minlength: NAME_MIN_LENGTH })
      ),
  });

  const form = useForm<UpdateNameFormData>({
    resolver: yupResolver(schema),
  });

  const updateName: SubmitHandler<UpdateNameFormData> = async data => {
    try {
      await mutateAsync({ name: data.name.trim() });

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
        const field = error.error.validation.field as keyof UpdateNameFormData;

        form.setError(field, {
          message: t(`errors.${field}.${type as 'required' | 'minlength'}`, {
            minlength: NAME_MIN_LENGTH,
          }),
        });

        setTimeout(() => {
          form.setFocus(field);
        }, 0);

        return;
      }

      setHasError(true);
    }
  };

  function onModalRequestClose() {
    setHasError(false);

    setTimeout(() => {
      form.setFocus('name');
    }, 0);
  }

  useEffect(() => {
    if (profile) {
      form.setValue('name', profile.name);

      setTimeout(() => {
        form.setFocus('name');
      }, 0);
    }
  }, [profile, form]);

  return (
    <>
      <Styles.Form
        onSubmit={form.handleSubmit(updateName, focusFirstInputWithError)}
      >
        <FormField
          label={t('form.name.label')}
          placeholder={t('form.name.placeholder')}
          icon={MdOutlineEmojiEmotions}
          error={form.formState.errors[nameFieldName]}
          disabled={isLoading || form.formState.isSubmitting}
          {...form.register(nameFieldName)}
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
