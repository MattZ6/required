import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { focusFirstInputWithError } from '@utils/focusFirstInputWithError';

import { PasswordFormField, FormButton } from '@components/form';

import { WelcomeBackFormType, welcomeBackSchema } from './schema';
import { FormStyles as Styles } from './styles';

export function WelcomeBackForm() {
  const t = useTranslations('welcome-back');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setFocus,
  } = useForm<WelcomeBackFormType>({
    resolver: zodResolver(welcomeBackSchema),
  });

  async function signIn() {
    // TODO:
  }

  useEffect(() => setFocus('password'), [setFocus]);

  return (
    <Styles.Form onSubmit={handleSubmit(signIn, focusFirstInputWithError)}>
      <PasswordFormField
        label={t('form.password.label')}
        placeholder={t('form.password.placeholder')}
        error={errors.password}
        disabled={isSubmitting}
        {...register('password')}
      />

      <Styles.Actions>
        <FormButton type="submit">{t('form.submit')}</FormButton>
      </Styles.Actions>
    </Styles.Form>
  );
}
