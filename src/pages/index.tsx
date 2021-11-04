import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { getAccessTokenFromCookies, getProfileDataFromCookies } from '@utils/authentication.utils';

import { useAuthentication } from '@contexts/Authentication';

import commonStyles from '@styles/common.module.scss';
import styles from './home.module.scss';

// TODO: Get access token from cookies and set to axios auth api service instance

export default function HomePage() {
  const router = useRouter();
  const { signOut, loadProfile, profile } = useAuthentication();

  const [isLoading, setIsLoading] = useState(false);

  function handleSignOut() {
    router.replace('/welcome-back');
    signOut();
  }

  useEffect(() => {
    async function loadProfileData() {
      setIsLoading(true);

      try {
        await loadProfile();
      } catch (error) {
        // TODO: Tratar o erro
      } finally {
        setIsLoading(false);
      }
    }

    loadProfileData();
  }, [loadProfile]);

  if (isLoading) {
    return (
      <h3>Loading profile...</h3>
    );
  }

  return (
    <div className={commonStyles.pageContainer}>
      <h1>Hello { profile?.name }</h1>

      <div className={styles.infoContainer}>
        <small>Name</small>
        <span>{profile?.name}</span>
      </div>

      <div className={styles.infoContainer}>
        <small>Email</small>
        <span>{profile?.email}</span>
      </div>

      <button onClick={handleSignOut}>Sair</button>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const accessToken = getAccessTokenFromCookies(req.cookies);

  if (!accessToken) {
    const profile = getProfileDataFromCookies(req.cookies);

    if (profile) {
      return {
        redirect: {
          destination: '/welcome-back',
          permanent: false,
        }
      };
    }

    return {
      redirect: {
        destination: '/sign-in',
        permanent: false
      }
    }
  }

  return {
    props: {},
  };
}
