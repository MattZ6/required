import { useCallback, useEffect, useRef, useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { RiKey2Fill } from 'react-icons/ri';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useAuthentication } from '@contexts/Authentication';

import { getAccessTokenFromCookies, getProfileDataFromCookies } from '@utils/authentication.utils';
import { getValidationErrors } from '@utils/yup.utils';
import { setFocusOnInput } from '@utils/form.utils';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import commonStyles from '@styles/common.module.scss';
import styles from './styles.module.scss';

type WelcomeBackFormData = {
  email: string;
  password: string;
}

type WelcomePageProps = {
  profile: {
    name: string;
    first_name: string;
    email: string;
  }
}

export default function WelcomePagePage({ profile }: WelcomePageProps) {
  const router = useRouter();
  const { login, forgetLastLogin } = useAuthentication();
  const formRef = useRef<FormHandles>(null);

  const passwordInputName = 'password';

  const [isSubmiting, setSubmiting] = useState(false);

  useEffect(() => {
    setFocusOnInput(`[name="${passwordInputName}"]`);
  }, []);

  const handleUseAnotherAccount = useCallback(() => {
    forgetLastLogin();
    router.replace('/sign-in');
  }, [forgetLastLogin, router]);

  const handleSubmit = useCallback(async (data: WelcomeBackFormData) => {
    formRef.current?.setErrors({});

    try {
      const schema = Yup.object().shape({
        [passwordInputName]: Yup.string()
          .min(6, 'At last 6 characters')
          .required('The password is required'),
      });

      await schema.validate(data, { abortEarly: false });

      setSubmiting(true);

      await login({ email: profile.email.trim(), password: data.password });

      router.replace('/');
    } catch (error) {
      setSubmiting(false);

      if (error instanceof Yup.ValidationError) {
        const validationErrorObject = getValidationErrors(error);

        formRef.current?.setErrors(validationErrorObject);

        const [inputName] = Object.keys(validationErrorObject);

        setFocusOnInput(`[name="${inputName}"]`);

        return;
      }

      // TODO: Tratar os erros
    }
  }, [login, router, profile.email]);

  return (
    <div className={commonStyles.pageContainer}>
      <header className={commonStyles.pageHeader}>
        <nav />
        <h1>Welcome back,<br/>{profile.first_name}!</h1>
        <p>Type your password to continue. 🔑</p>
      </header>

      <Form noValidate className={styles.form} ref={formRef} onSubmit={handleSubmit}>
        <Input
          name={passwordInputName}
          label="Type your password"
          type="password"
          placeholder="I won't tell anyone 🤫"
          icon={RiKey2Fill}
          disabled={isSubmiting}
        />

        <Button
          style={{ alignSelf: 'flex-end' }}
          type="submit"
          disabled={isSubmiting}
          showLoader={isSubmiting}
        >
          Continue
        </Button>
      </Form>

      <footer className={commonStyles.pageFooter}>
        <p>Sign in with <button onClick={handleUseAnotherAccount}>another account</button>.</p>
      </footer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<WelcomePageProps> = async ({ req }) => {
  const accessToken = getAccessTokenFromCookies(req.cookies);

  if (accessToken) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      },
    }
  }

  const profile = getProfileDataFromCookies(req.cookies);

  if (!profile) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      }
    };
  }

  const [first_name] = String(profile.name ?? '').trim().split(' ');

  return {
    props: {
      profile: {
        ...profile,
        first_name,
      }
    },
  };
}

