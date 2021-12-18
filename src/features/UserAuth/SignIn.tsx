import React from 'react';
import SignInForm from 'features/UserAuth/components/SignInForm';
import FooterLayout from './layouts/Footer';
import NavigationLink from './components/NavigationLink';
import { AUTH_PATHS } from '../../routes/constants';

const SignIn = function (): React.ReactElement {
  return (
    <>
      <SignInForm />
      <FooterLayout
        text="Don`t have an account?"
        link={<NavigationLink path={AUTH_PATHS.SIGN_UP} text="Sign up" />}
      />
    </>
  );
};

export default SignIn;
