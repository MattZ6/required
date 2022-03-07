import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useTranslation } from '@hooks/useTranslation';

import { focusFirstInputWithError } from '@utils/focusFirstInputWithError';
import { setFocusOnInput } from '@utils/setFocusOnInput';

import { FormField, FormButton } from '@components/form';

import { FormStyles as Styles } from './styles';

const emailFieldName = 'email';

export function UpdateProfileEmailForm() {
  const t = useTranslation('update-profile-email');

  const schema = yup.object().shape({
    [emailFieldName]: yup
      .string()
      .required(t('errors.email.required'))
      .email(t('errors.email.invalid')),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const signIn: SubmitHandler<any> = async () => {
    // TODO:
  };

  useEffect(() => {
    setFocusOnInput(emailFieldName);
  }, []);

  return (
    <Styles.Form onSubmit={handleSubmit(signIn, focusFirstInputWithError)}>
      <FormField
        label={t('form.email.label')}
        placeholder={t('form.email.placeholder')}
        error={formState.errors[emailFieldName]}
        disabled={formState.isSubmitting}
        {...register(emailFieldName)}
      />

      <Styles.Actions>
        <FormButton type="submit">{t('form.submit')}</FormButton>
      </Styles.Actions>
    </Styles.Form>
  );
}
