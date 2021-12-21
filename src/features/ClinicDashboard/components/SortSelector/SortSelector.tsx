import React from 'react';
import styled from 'styled-components';
import { StyledDiv, StyledLabel, StyledButton } from './SortSelectorStyles';
import { ReactComponent as IconChevron } from '../../images/icon-chevron-down.svg';

const StyledIcon = styled(IconChevron)`
    margin-left: 10px;
`;

type SortSelectorProps = {
  label: string,
  text: string
};

const SortSelector = function ({ label, text }:SortSelectorProps) {
  return (
    <StyledDiv>
      <StyledLabel>{label}</StyledLabel>
      <StyledButton>
        {text}
        <StyledIcon />
      </StyledButton>
    </StyledDiv>
  );
};

export default SortSelector;
