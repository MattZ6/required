import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import * as yup from 'yup';

import { useTranslation } from '@hooks/useTranslation';

import { useUpdateName } from '@services/user/profile';

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
  const t = useTranslation('update-profile-name');
  const [hasError, setHasError] = useState(false);

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

  const { register, handleSubmit, formState, setFocus, setError } =
    useForm<UpdateNameFormData>({
      resolver: yupResolver(schema),
    });

  const signIn: SubmitHandler<UpdateNameFormData> = async data => {
    try {
      await mutateAsync({ name: data.name.trim() });
    } catch (err) {
      const error = parseRequestError(err);

      if (error.error.validation) {
        const { type } = error.error.validation;
        const field = error.error.validation.field as keyof UpdateNameFormData;

        setError(field, {
          message: t(`errors.${field}.${type}`, {
            minlength: NAME_MIN_LENGTH,
          }),
        });

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
      <Styles.Form onSubmit={handleSubmit(signIn, focusFirstInputWithError)}>
        <FormField
          label={t('form.name.label')}
          placeholder={t('form.name.placeholder')}
          icon={MdOutlineEmojiEmotions}
          error={formState.errors[nameFieldName]}
          disabled={formState.isSubmitting}
          {...register(nameFieldName)}
        />

        <Styles.Actions>
          <FormButton
            type="submit"
            disabled={formState.isSubmitting}
            showLoading={formState.isSubmitting}
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
