import React from 'react'
import SignUpForm from "./components/SignUpForm";
import {useNavigate} from 'react-router-dom'
import FooterLayout from "./layouts/Footer";
import StyledLink from "./core/StyledLink";


function SignUp(props) {
    const navigate = useNavigate()

    return (
        <>
            <SignUpForm/>
            <FooterLayout text={'Already have an account?'} link={
                <StyledLink onClick={() => {
                    navigate('/sign-in')
                }}>Sign In</StyledLink>}>
            </FooterLayout>
        </>
    )
}

export default SignUp
