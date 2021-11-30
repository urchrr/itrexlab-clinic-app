import React from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInInputList } from 'features/UserAuth/services/inputLists';
import * as constants from 'services/constants';
import { userLogIn } from 'services/redux/user/actions';
import Input from './Input/Input';
import StyledForm from '../core/StyledForm';
import { signInSchema } from '../services/validationSchemas';
import StyledHeader from '../core/StyledHeader';
import StyledHeaderTitle from '../core/StyledHeaderTitle';
import StyledSubmitButton from '../core/StyledSubmitButton';

const StyledLink = styled.button`
    margin-top: 32px;
    font-size: 15px;
    line-height: 22px;
    color: ${constants.blue};
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
`;

const SignInForm = function () {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRestore = () => {
    navigate('/restore-password');
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    onSubmit: (values) => {
      dispatch(userLogIn({ values, navigate: () => { navigate('/clinic'); } }));
    },
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledHeader>
        <StyledHeaderTitle>Sign In</StyledHeaderTitle>
      </StyledHeader>
      {signInInputList.map((input) => (
        <Input
          key={`signinform-${input.name}`}
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
      <StyledSubmitButton title="Sign In" />
      <StyledLink onClick={handleRestore}>Forgot Password?</StyledLink>
    </StyledForm>
  );
};

export default SignInForm;
