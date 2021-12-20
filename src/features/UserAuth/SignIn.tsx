import React from 'react';
import SignInForm from 'features/UserAuth/components/SignInForm';
import FooterLayout from './layouts/Footer';
import NavigationLink from './components/NavigationLink';
import { AuthPaths } from '../../routes/constants';

const SignIn = function () {
  return (
    <>
      <SignInForm />
      <FooterLayout
        text="Don`t have an account?"
        link={<NavigationLink path={AuthPaths.signUp} text="Sign up" />}
      />
    </>
  );
};

export default SignIn;
