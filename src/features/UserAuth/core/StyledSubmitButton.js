import React from "react";
import styled from "styled-components";
import * as constants from "../services/constants";
import imgChevron from "../images/schevron.svg";

const StyledSubmitButton = styled.button.attrs(() => ({
  type: "submit",
}))`
  cursor: pointer;
  border-radius: 8px;
  background: ${constants.blue};
  color: ${constants.white};
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
    background: ${constants.grey};
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
const SubmitButton = (props) => (
  <StyledSubmitButton {...props}>
    {props.children}
    <Chevron />
  </StyledSubmitButton>
);

export default SubmitButton;
