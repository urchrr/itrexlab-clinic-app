import React from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import Input from './Input'
import StyledForm from '../core/StyledForm'
import { signUpSchema } from '../services/validationSchemas'
import StyledHeader from '../core/StyledHeader'
import StyledHeaderTitle from '../core/StyledHeaderTitle'
import StyledSubmitButton from '../core/StyledSubmitButton'
import { signupInputList } from '../services/inputLists'
import { signUp } from '../services/mockApi'

const SignUpForm = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: '',
        },
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            signUp(values)
                .then(() => {
                    navigate('/sign-in')
                })
                .catch((err) => {
                    // eslint-disable-next-line no-console
                    console.error(err)
                })
        },
    })
    return (
        <StyledForm onSubmit={formik.handleSubmit}>
            <StyledHeader>
                <StyledHeaderTitle>Sign Up</StyledHeaderTitle>
            </StyledHeader>
            {signupInputList.map((input) => (
                <Input
                    key={`signupform-${input.name}`}
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
            ))}
            <StyledSubmitButton>Sign Up</StyledSubmitButton>
        </StyledForm>
    )
}

export default SignUpForm
