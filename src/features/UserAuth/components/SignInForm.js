import React from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Input from './Input/Input';
import StyledForm from '../core/StyledForm';
import { signInSchema } from '../services/validationSchemas';
import StyledHeader from '../core/StyledHeader';
import StyledHeaderTitle from '../core/StyledHeaderTitle';
import StyledSubmitButton from '../core/StyledSubmitButton';
import { signInInputList } from '../services/inputLists';
import * as constants from '../../../services/constants';
import { signIn } from '../services/mockApi';
import SET_LOGGED_IN from '../../../services/redux/actionTypes';

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
      signIn(values)
        .then(() => {
          dispatch({ type: SET_LOGGED_IN, payload: true });
          navigate('/clinic');
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err);
        });
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
