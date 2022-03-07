import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useTranslation } from '@hooks/useTranslation';

import { focusFirstInputWithError } from '@utils/focusFirstInputWithError';
import { setFocusOnInput } from '@utils/setFocusOnInput';

import { FormField, FormButton } from '@components/form';

import { FormStyles as Styles } from './styles';

const nameFieldName = 'name';

export function UpdateProfileNameForm() {
  const commonT = useTranslation('common');
  const t = useTranslation('update-profile-name');

  const schema = yup.object().shape({
    [nameFieldName]: yup
      .string()
      .trim()
      .required(t('errors.name.required'))
      .min(3, commonT('errors.min', { count: 3 })),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const signIn: SubmitHandler<any> = async () => {
    // TODO:
  };

  useEffect(() => {
    setFocusOnInput(nameFieldName);
  }, []);

  return (
    <Styles.Form onSubmit={handleSubmit(signIn, focusFirstInputWithError)}>
      <FormField
        label={t('form.name.label')}
        placeholder={t('form.name.placeholder')}
        error={formState.errors[nameFieldName]}
        disabled={formState.isSubmitting}
        {...register(nameFieldName)}
      />

      <Styles.Actions>
        <FormButton type="submit">{t('form.submit')}</FormButton>
      </Styles.Actions>
    </Styles.Form>
  );
}
