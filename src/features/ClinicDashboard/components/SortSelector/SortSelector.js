import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledDiv, StyledLabel, StyledButton } from './SortSelectorStyles';
import { ReactComponent as IconChevron } from '../../images/icon-chevron-down.svg';

const StyledIcon = styled(IconChevron)`
    margin-left: 10px;
`;

const SortSelector = function ({ label, text }) {
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

SortSelector.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
};

export default SortSelector;
