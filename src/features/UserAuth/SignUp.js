import React from "react";
import SignUpForm from "./components/SignUpForm";
import FooterLayout from "./layouts/Footer";
import NavigationLink from "./components/NavigationLink";

function SignUp() {
  return (
    <>
      <SignUpForm />
      <FooterLayout
        text={"Already have an account?"}
        link={<NavigationLink path={"/sign-in"} text={"Sign in"} />}
      ></FooterLayout>
    </>
  );
}

export default SignUp;
