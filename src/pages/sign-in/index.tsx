import { useCallback, useEffect, useRef, useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MdAlternateEmail } from 'react-icons/md';
import { RiKey2Fill } from 'react-icons/ri';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { getAccessTokenFromCookies, getProfileDataFromCookies } from '@utils/authentication.utils';

import { useAuthentication } from '@contexts/Authentication';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import styles from './styles.module.scss';
import commonStyles from '@styles/common.module.scss';
import { getValidationErrors } from '@utils/yup.utils';

type SignInFormData = {
  email: string;
  password: string;
}

function setFocusOnInput(selector: string) {
  const input = document.querySelector<HTMLInputElement>(selector);

  input?.focus();
}

export default function SignInPage() {
  const router = useRouter();
  const { login } = useAuthentication();
  const formRef = useRef<FormHandles>(null);

  const emailInputName = 'email';
  const passwordInputName = 'password';

  const [isSubmiting, setSubmiting] = useState(false);

  useEffect(() => {
    setFocusOnInput(`[name="${emailInputName}"]`);
  }, []);

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    formRef.current?.setErrors({});

    try {
      const schema = Yup.object().shape({
        [emailInputName]: Yup.string()
          .required('The email is required')
          .email('You must enter a valid email address'),
        [passwordInputName]: Yup.string()
          .min(6, 'At last 6 characters')
          .required('The password is required'),
      });

      await schema.validate(data, { abortEarly: false });

      setSubmiting(true);

      const { email, password } = data;

      await login({ email, password });

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
  }, [login, router]);

  return (
    <div className={commonStyles.pageContainer}>
      <header className={commonStyles.pageHeader}>
        <nav />
        <h1>Sign in</h1>
        <p>
          Sign in to continue to your profile page.
        </p>
      </header>

      <Form noValidate className={styles.form} ref={formRef} onSubmit={handleSubmit}>
        <Input
          name={emailInputName}
          label="Type your e-mail"
          type="email"
          placeholder="Just type your e-mail bro"
          autoComplete="off"
          icon={MdAlternateEmail}
          disabled={isSubmiting}
        />

        <Input
          name={passwordInputName}
          label="Type your password"
          type="password"
          placeholder="I won't tell anyone 🤫"
          icon={RiKey2Fill}
          disabled={isSubmiting}
        />

        <Button
          type="submit"
          disabled={isSubmiting}
          showLoader={isSubmiting}
          style={{ alignSelf: 'flex-end' }}
        >
          Sign in
        </Button>
      </Form>

      <footer className={commonStyles.pageFooter}>
        <p>Not have an account yet? <Link href="/sign-up"><a aria-disabled={isSubmiting}>Create right now</a></Link>!
        </p>
      </footer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const accessToken = getAccessTokenFromCookies(req.cookies);

  if (accessToken) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const profile = getProfileDataFromCookies(req.cookies);

  if (profile) {
    return {
      redirect: {
        destination: '/welcome-back',
        permanent: false
      }
    }
  }

  return {
    props: {},
  };
}
