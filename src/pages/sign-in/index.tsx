import { FormEvent, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MdAlternateEmail } from 'react-icons/md';
import { RiKey2Fill } from 'react-icons/ri';

import { getAccessTokenFromCookies, getProfileDataFromCookies } from '@utils/authentication.utils';

import { useAuthentication } from '@contexts/Authentication';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import styles from './styles.module.scss';
import commonStyles from '@styles/common.module.scss';

export default function SignInPage() {
  const router = useRouter();
  const { login } = useAuthentication();

  const [isSubmiting, setSubmiting] = useState(false);

  useEffect(() => {
    const input = document.querySelector<HTMLInputElement>('[name="auth-app-login-email"]');

    input?.focus();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmiting(true);

    try {
      // TODO: Get email and password from inputs
      await login({ email: 'john@doe.com', password: '123456' });

      router.replace('/');
    } catch (error) {
      // TODO: Tratar os erros
    } finally {
      setSubmiting(false);
    }
  }

  return (
    <div className={commonStyles.pageContainer}>
      <header className={commonStyles.pageHeader}>
        <nav />
        <h1>Sign in</h1>
        <p>
          Sign in to continue to your profile page.
        </p>
      </header>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          label="Type your e-mail"
          type="email"
          placeholder="Just type your e-mail bro"
          name="auth-app-login-email"
          icon={MdAlternateEmail}
          disabled={isSubmiting}
        />

        <Input
          label="Type your password"
          type="password"
          placeholder="I won't tell anyone 🤫"
          name="auth-app-login-pass"
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
      </form>

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
