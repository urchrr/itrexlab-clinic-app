import React, { useState } from "react";
import { useFormik } from "formik";
import Input from "./Input";
import StyledForm from "../core/StyledForm";
import styled from "styled-components";
import { restorePassSchema } from "../services/validationSchemas";
import StyledHeader from "../core/StyledHeader";
import StyledHeaderTitle from "../core/StyledHeaderTitle";
import StyledSubmitButton from "../core/StyledSubmitButton";
import { restorePasswordInputList } from "../services/inputLists";
import * as constants from "../services/constants";
import StyledGoBackButton from "../core/StyledGoBackButton";
import { useNavigate } from "react-router-dom";

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

const RestorePassForm = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/sign-in");
  };
  const [isSubmitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("example@exam.com");
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: restorePassSchema,
    onSubmit: (values) => {
      setSubmitted(!isSubmitted);
      setEmail(values.email);
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
            Please use your email address, and we`ll send you the link to reset
            your password
          </FormText>
          {restorePasswordInputList.map((input) => {
            return (
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
            );
          })}
          <StyledSubmitButton>Send Reset link</StyledSubmitButton>
        </>
      ) : (
        <>
          <FormText>
            An email has been sent to <SpanEmail>{email}</SpanEmail>. Check your
            inbox, and click the reset link provided.
          </FormText>
        </>
      )}
    </StyledForm>
  );
};

export default RestorePassForm;
