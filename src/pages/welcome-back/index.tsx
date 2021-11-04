import { useCallback, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { RiKey2Fill } from 'react-icons/ri';

import { getAccessTokenFromCookies, getProfileDataFromCookies } from '../../utils/authentication.utils';

import { useAuthentication } from '../../contexts/Authentication';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import commonStyles from '../../styles/common.module.scss';
import styles from './styles.module.scss';


type WelcomePageProps = {
  profile: {
    name: string;
    first_name: string;
    email: string;
  }
}

export default function WelcomePagePage({ profile }: WelcomePageProps) {
  const router = useRouter();
  const { forgetLastLogin } = useAuthentication();

  useEffect(() => {
    const input = document.querySelector<HTMLInputElement>('[name="auth-app-welcome-back-pass"]');

    input?.focus();
  }, []);

  const handleUseAnotherAccount = useCallback(() => {
    forgetLastLogin();
    router.replace('/sign-in');
  }, [forgetLastLogin, router]);

  return (
    <div className={commonStyles.pageContainer}>
      <header className={commonStyles.pageHeader}>
        <nav />
        <h1>Welcome back,<br/>{profile.first_name}!</h1>
        <p>Type your password to continue. 🔑</p>
      </header>

      <form className={styles.form} onSubmit={event => event.preventDefault()}>
        <Input
          label="Type your password"
          type="password"
          placeholder="I won't tell anyone 🤫"
          name="auth-app-welcome-back-pass"
          icon={RiKey2Fill}
        />

        <Button style={{ alignSelf: 'flex-end' }} type="submit">
          Continue
        </Button>
      </form>

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

