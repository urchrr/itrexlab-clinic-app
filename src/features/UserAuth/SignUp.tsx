import React from 'react';
import SignUpForm from 'features/UserAuth/components/SignUpForm/SignUpForm';
import FooterLayout from './layouts/Footer';
import NavigationLink from './components/NavigationLink';

const SignUp = function () {
  return (
    <>
      <SignUpForm />
      <FooterLayout
        text="Already have an account?"
        link={<NavigationLink path="/sign-in" text="Sign in" />}
      />
    </>
  );
};

export default SignUp;
