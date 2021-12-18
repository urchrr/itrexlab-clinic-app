import React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  IInitialValues,
  signInInputList,
  signInpInputsInitialValues as initialValues,
} from 'features/UserAuth/services/inputLists';
import * as constants from 'services/constants';
import Input from 'features/UserAuth/components/Input/Input';
import StyledForm from 'features/UserAuth/core/StyledForm';
import { signInSchema } from 'features/UserAuth/services/validationSchemas';
import StyledHeader from 'features/UserAuth/core/StyledHeader';
import StyledHeaderTitle from 'features/UserAuth/core/StyledHeaderTitle';
import StyledSubmitButton from 'features/UserAuth/core/StyledSubmitButton';
import { useAuthorisation } from 'features/UserAuth/hooks/useAuth';

const StyledLink = styled.button`
    margin-top: 32px;
    font-size: 15px;
    line-height: 22px;
    color: ${constants.blue};
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
  padding: 0;
  outline: none;
  border: none;
  background-color:inherit;
  text-align: start;
`;

const SignInForm = function () {
  const navigate = useNavigate();
  const { login } = useAuthorisation();
  const handleRestore = () => {
    navigate('/restore-password');
  };

  const handleSubmit = (values:IInitialValues) => {
    // eslint-disable-next-line no-console
    console.log('click');
    login(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={handleSubmit}
    >
      {
        (formik) => (
          <StyledForm onSubmit={formik.handleSubmit} data-testid="sign-in-form">
            <StyledHeader>
              <StyledHeaderTitle>Sign In</StyledHeaderTitle>
            </StyledHeader>
            {signInInputList.map(({
              name, icon, type, placeholder,
            }) => (
              <Input
                key={`form-input-${name}`}
                data-testid={`form-input-${name}`}
                icon={icon}
                placeholder={placeholder}
                type={type}
                name={name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[name]}
                touched={formik.touched[name]}
                error={formik.errors[name]}
              />
            ))}
            <StyledSubmitButton title="Sign In" data-testid="form-submit-button" />
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label,no-console */}
            <button onClick={() => { console.log('dd'); }} type="button" />
            <StyledLink onClick={handleRestore}>Forgot Password?</StyledLink>
          </StyledForm>
        )
      }

    </Formik>
  );
};

export default SignInForm;
