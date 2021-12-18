import React, { useState } from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import StyledForm from 'features/UserAuth/core/StyledForm';
import { restorePassSchema } from 'features/UserAuth/services/validationSchemas';
import StyledHeader from 'features/UserAuth/core/StyledHeader';
import StyledHeaderTitle from 'features/UserAuth/core/StyledHeaderTitle';
import StyledSubmitButton from 'features/UserAuth/core/StyledSubmitButton';
import { restorePasswordInputList, restorePasswordInitialValues as initialValues } from 'features/UserAuth/services/inputLists';
import * as constants from 'services/constants';
import StyledGoBackButton from 'features/UserAuth/core/StyledGoBackButton';
import Input from './Input/Input';

const FormText = styled.p`
    font-size: 15px;
    line-height: 130%;
    color: ${constants.grey};
    margin-bottom: 24px;
`;
const SpanEmail = styled.span`
    color: ${constants.blue};
    text-decoration-line: underline;
`;

const RestorePassForm = function () {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate('/sign-in');
  };
  const [isSubmitted, setSubmitted] = useState(false);
  const [printedMail, setPrintedMail] = useState('example@exam.com');
  const formik = useFormik({
    initialValues,
    validationSchema: restorePassSchema,
    onSubmit: ({ userName }) => {
      setSubmitted(!isSubmitted);
      if (userName) setPrintedMail(userName);
    },
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledHeader>
        <StyledGoBackButton onClick={handleGoBack} />
        <StyledHeaderTitle>Restore Password</StyledHeaderTitle>
      </StyledHeader>
      {!isSubmitted ? (
        <>
          <FormText>
            Please use your email address, and we`ll send you the
            link to reset your password
          </FormText>
          {restorePasswordInputList.map((input) => (
            <Input
              key={`RestorePassForm-${input.name}`}
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
          <StyledSubmitButton title="Send Reset link" />
        </>
      ) : (
        <FormText>
          An email has been sent to
          {' '}
          <SpanEmail>{printedMail}</SpanEmail>
          . Check your inbox, and click the reset link provided.
        </FormText>
      )}
    </StyledForm>
  );
};

export default RestorePassForm;
