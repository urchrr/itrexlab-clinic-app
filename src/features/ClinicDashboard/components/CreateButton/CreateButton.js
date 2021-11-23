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

const CreateButton = function ({ onClick }) {
  return (
    <StyledButton onClick={onClick}>
      <StyledIcon />
      Create an appointment
    </StyledButton>
  );
};

export default CreateButton;
