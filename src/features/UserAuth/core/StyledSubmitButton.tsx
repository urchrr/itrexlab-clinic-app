import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as constants from 'services/constants';
import imgChevron from '../images/schevron.svg';

const StyledSubmitButton = styled.button.attrs(() => ({
  type: 'submit',
}))`
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};;
    border-radius: 8px;
    background: ${(props) => (props.disabled ? constants.greySolid : constants.blue)};
    color: ${(props) => (props.disabled ? constants.grey : constants.white)};
    padding: 12px 16px 12px 16px;
    outline: none;
    border: none;
    margin: 0 auto 0 0;
    font-size: 15px;
    line-height: 19px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:disabled {
      background: #dce0ec;
      cursor: default;
    }

    @media only screen and (min-width: 560px) {
        font-size: 17px;
        line-height: 25px;
        margin-top: 24px;
        margin-bottom: 32px;
        padding: 16px 25px 16px 24px;
    }
`;

const Chevron = styled.span`
    display: block;
    background-image: url(${imgChevron});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
    color: ${constants.white};
    padding: 5px;
    margin-left: 8px;
`;
type SubmitButtonProps = {
  title: string,
  disabled?: boolean
};
const SubmitButton = function ({ title, ...props }:SubmitButtonProps) {
  return (
    <StyledSubmitButton {...props}>
      {title}
      <Chevron />
    </StyledSubmitButton>
  );
};

SubmitButton.propTypes = {
  title: PropTypes.string,
};

export default SubmitButton;
