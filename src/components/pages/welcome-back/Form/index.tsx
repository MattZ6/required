import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useTranslation } from '@hooks/useTranslation';

import { PasswordFormField, FormButton } from '@components/form';

import { focusFirstInputWithError } from '@utils/focusFirstInputWithError';

import { FormStyles as Styles } from './styles';
import { setFocusOnInput } from '@utils/setFocusOnInput';

const passwordFormFieldName = 'password';

export function WelcomeBackForm() {
  const t = useTranslation('welcome-back');

  const schema = yup.object().shape({
    [passwordFormFieldName]: yup.string()
      .required(t('errors.password.required'))
      .min(6, t('errors.password.min', { count: 6 }))
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const signIn: SubmitHandler<any> = async (data) => {
    try {

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    setFocusOnInput(passwordFormFieldName);
  }, []);

  return (
    <Styles.Form onSubmit={handleSubmit(signIn, focusFirstInputWithError)}>
      <PasswordFormField
        label={t('form.password.label')}
        placeholder={t('form.password.placeholder')}
        error={formState.errors[passwordFormFieldName]}
        disabled={formState.isSubmitting}
        { ...register(passwordFormFieldName) }
      />

      <Styles.Actions>
        <FormButton type="submit">
          {t('form.submit')}
        </FormButton>
      </Styles.Actions>
    </Styles.Form>
  );
}
