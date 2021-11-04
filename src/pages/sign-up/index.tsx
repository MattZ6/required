import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { MdAlternateEmail } from 'react-icons/md';
import { RiKey2Fill, RiUserSmileFill } from 'react-icons/ri';

import { getAccessTokenFromCookies, getProfileDataFromCookies } from '@utils/authentication.utils';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { BackButtonLink } from '@components/BackButtonLink';

import commonStyles from '@styles/common.module.scss';
import styles from './styles.module.scss';

export default function SignUpPage() {
  useEffect(() => {
    const input = document.querySelector<HTMLInputElement>('[name="auth-app-register-name"]');

    input?.focus();
  }, []);

  return (
    <div className={commonStyles.pageContainer}>
      <header className={commonStyles.pageHeader}>
        <nav>
          <BackButtonLink to="/sign-in" />
        </nav>
        <h1>Create account</h1>
        <p>{`Not have an account yet? You're in the right place.`}</p>
      </header>

      <form className={styles.form} onSubmit={event => event.preventDefault()}>
        <Input
          label="Whats your name?"
          type="text"
          placeholder="Alejandro? Fernando? Roberto? ..."
          name="auth-app-register-name"
          icon={RiUserSmileFill}
        />

        <Input
          label="Type your e-mail"
          type="email"
          placeholder="Just type your e-mail bro"
          name="auth-app-register-email"
          icon={MdAlternateEmail}
        />

        <Input
          label="Type your password"
          type="password"
          placeholder="I won't tell anyone 🤫"
          name="auth-app-register-pass"
          icon={RiKey2Fill}
        />

        <Button style={{ alignSelf: 'flex-end' }} type="submit">
          Create account
        </Button>
      </form>

      <footer className={commonStyles.pageFooter}>
        <p>Oh wait... <Link href="/sign-in"><a>I already have a account</a></Link>!</p>
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
      },
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
