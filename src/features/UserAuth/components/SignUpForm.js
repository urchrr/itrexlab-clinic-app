import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import StyledSubmitButton from 'features/UserAuth/core/StyledSubmitButton';
import { signUpInputList } from 'features/UserAuth/services/inputLists';
import { onUserRegistration } from 'services/redux/registration/actions';
import StyledForm from 'features/UserAuth/core/StyledForm';
import { signUpSchema } from 'features/UserAuth/services/validationSchemas';
import StyledHeader from 'features/UserAuth/core/StyledHeader';
import StyledHeaderTitle from 'features/UserAuth/core/StyledHeaderTitle';
import Input from './Input/Input';

const SignUpForm = function () {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      dispatch(onUserRegistration({ values, navigate: () => { navigate('/sign-in'); } }));
    },
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledHeader>
        <StyledHeaderTitle>Sign Up</StyledHeaderTitle>
      </StyledHeader>
      {signUpInputList.map((input) => (
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
      <StyledSubmitButton title="Sign Up" />
    </StyledForm>
  );
};

export default SignUpForm;
