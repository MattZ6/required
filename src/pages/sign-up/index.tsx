import { useCallback, useEffect, useRef, useState } from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdAlternateEmail } from 'react-icons/md';
import { RiKey2Fill, RiUserSmileFill } from 'react-icons/ri';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useAuthentication } from '@contexts/Authentication';

import { getAccessTokenFromCookies, getProfileDataFromCookies } from '@utils/authentication.utils';
import { getValidationErrors } from '@utils/yup.utils';
import { setFocusOnInput } from '@utils/form.utils';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { BackButtonLink } from '@components/BackButtonLink';

import commonStyles from '@styles/common.module.scss';

type SignUpFormData = {
  name: string;
  email: string;
  password: string;
}

export default function SignUpPage() {
  const router = useRouter();
  const { login } = useAuthentication();
  const formRef = useRef<FormHandles>(null);

  const nameInputName = 'name';
  const emailInputName = 'email';
  const passwordInputName = 'password';

  const [isSubmiting, setSubmiting] = useState(false);

  useEffect(() => {
    setFocusOnInput(`[name="${nameInputName}"]`);
  }, []);

  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    formRef.current?.setErrors({});

    try {
      const schema = Yup.object().shape({
        [nameInputName]: Yup.string().trim()
          .min(3, 'At last 3 characters')
          .required('The name is required'),
        [emailInputName]: Yup.string()
          .required('The email is required')
          .email('You must enter a valid email address'),
        [passwordInputName]: Yup.string()
          .min(6, 'At last 6 characters')
          .required('The password is required'),
      });

      await schema.validate(data, { abortEarly: false });

      setSubmiting(true);

      // TODO: Criar conta
      // TODO: Efetuar login
      // TODO: Navegar para a home

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

      <Form noValidate className={commonStyles.pageForm} ref={formRef} onSubmit={handleSubmit}>
        <Input
          name={nameInputName}
          label="Whats your name?"
          type="text"
          placeholder="Alejandro? Fernando? Roberto? ..."
          icon={RiUserSmileFill}
          disabled={isSubmiting}
        />

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
          Create account
        </Button>
      </Form>

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
