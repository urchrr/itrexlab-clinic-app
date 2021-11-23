import React from 'react';
import FooterLayout from './layouts/Footer';
import SignInForm from './components/SignInForm';
import NavigationLink from './components/NavigationLink';

const SignIn = function () {
  return (
    <>
      <SignInForm />
      <FooterLayout
        text="Don`t have an account?"
        link={<NavigationLink path="/sign-up" text="Sign up" />}
      />
    </>
  );
};

export default SignIn;
