import React from 'react';
import styled from 'styled-components';
import StyledButton from './CreateButtonStyles';
import { ReactComponent as IconPlus } from '../../images/icon-plus.svg';

const StyledIcon = styled(IconPlus)`
    width: 16px;
    height: 16px;
    margin-right: 12px;
    background-position: center;
`;
type CreateButtonProps = {
  onClick:()=>void
};
const CreateButton = function ({ onClick }:CreateButtonProps) {
  return (
    <StyledButton onClick={onClick}>
      <StyledIcon />
      Create an appointment
    </StyledButton>
  );
};

export default CreateButton;
