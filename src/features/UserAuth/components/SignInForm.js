import React from "react";
import {useFormik} from "formik";
import Input from "./Input";
import styled from "styled-components";
import StyledForm from "../core/StyledForm";
import {signInSchema} from '../services/validationSchemas'
import StyledHeader from "../core/StyledHeader";
import StyledHeaderTitle from "../core/StyledHeaderTitle";
import StyledSubmitButton from "../core/StyledSubmitButton";
import {signinInputList} from "../services/inputLists";
import * as constants from "../services/constants";
import {useNavigate} from "react-router-dom";

const Link = styled.a`
  margin-top: 32px;
  font-size: 15px;
  line-height: 22px;
  color: ${constants.blue};
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
`

const SignInForm = props => {
    const navigate = useNavigate()
    const handleRestore = _ => {
        navigate('/restore-password')
    }
    const formik = useFormik({
            initialValues: {
                email: '',
                password: '',
            },
            validationSchema: signInSchema,
            onSubmit: values => {
                alert(JSON.stringify(values, null, 2));
            }
        }
    )
    return (
        <StyledForm onSubmit={formik.handleSubmit}>
            <StyledHeader>
                <StyledHeaderTitle>Sign In</StyledHeaderTitle>
            </StyledHeader>
            {signinInputList.map(input => {
                return (
                    <Input key={`signinform-${input.name}`}
                           icon={input.icon}
                           placeholder={input.placeholder}
                           type={input.type}
                           name={input.name}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values[input.name]}
                           touched={formik.touched[input.name]}
                           error={formik.errors[input.name]}
                    />
                )
            })}
            <StyledSubmitButton>Sign In</StyledSubmitButton>
            <Link onClick={handleRestore}>Forgot Password?</Link>
        </StyledForm>
    )
}

export default SignInForm