import React from 'react';
import styled from 'styled-components';
import { InputError } from 'features/UserAuth/components/Input/InputStyles';

const StyledLabel = styled.label`
    font-weight: 500;
    font-size: 13px;
    line-height: 17px;
    color: #000000;
    margin-bottom: 16px;
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    &:last-of-type {
        margin-bottom: 0;
    }
`;
type WrapperProps = {
  label:string,
  touched?: boolean,
  error?: string
};
const StyledInputWrapper: React.FC<WrapperProps> = function ({
  label, children, error, touched,
}) {
  return (
    <StyledWrapper>
      <StyledLabel>{label}</StyledLabel>
      {children}
      {touched && error ? <InputError>{error}</InputError> : null}
    </StyledWrapper>
  );
};

export default StyledInputWrapper;
