import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import StyledSubmitButton from 'features/UserAuth/core/StyledSubmitButton';
import { signUpInputList } from 'features/UserAuth/services/inputLists';

import StyledForm from 'features/UserAuth/core/StyledForm';
import { signUpSchema } from 'features/UserAuth/services/validationSchemas';
import StyledHeader from 'features/UserAuth/core/StyledHeader';
import StyledHeaderTitle from 'features/UserAuth/core/StyledHeaderTitle';

import Input from 'features/UserAuth/components/Input/Input';
import { getInitialValuesFromInputList, useAuthorisation } from 'features/UserAuth/services/heplers';

const SignUpForm = function () {
  const navigate = useNavigate();
  const { register } = useAuthorisation();
  const initialValues = getInitialValuesFromInputList(signUpInputList);
  const formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      register(values, navigate);
    },
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledHeader>
        <StyledHeaderTitle>Sign Up</StyledHeaderTitle>
      </StyledHeader>
      {signUpInputList.map(({
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
      <StyledSubmitButton title="Sign Up" data-testid="form-submit-button" />
    </StyledForm>
  );
};

export default SignUpForm;
