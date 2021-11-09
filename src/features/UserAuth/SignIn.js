import React from 'react'
import {useNavigate} from 'react-router-dom'
import FooterLayout from "./layouts/Footer";
import StyledLink from "./core/StyledLink";
import SignInForm from "./components/SignInForm";

function SignIn() {
    const navigate = useNavigate()
    return (
        <>
            <SignInForm/>
            <FooterLayout text={'Don`t have an account?'} link={
                <StyledLink onClick={() => {
                    navigate('/sign-up')
                }}>Sign up</StyledLink>}>
            </FooterLayout>
        </>
    )
}

export default SignIn
