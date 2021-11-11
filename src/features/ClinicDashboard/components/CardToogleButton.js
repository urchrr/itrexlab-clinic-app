import React from "react";
import styled from "styled-components";
import StyledButton from "../core/StyledButton";
import iconDotBurger from "../images/icon-dotburger.svg";
import iconDotBurgerActive from "../images/icon-dotburger-active.svg";
import { useState } from "react";
import * as constants from "../services/constants";

const StyledToggleButton = styled(StyledButton)`
  grid-area: button;
  border: none;
  width: 40px;
  height: 40px;
  outline: none;
  cursor: pointer;
  align-self: center;
  border-radius: 6px;
  background-color: ${(props) =>
    props.active ? constants.formBackgroundColor : "transparent"};
  background-image: url(${(props) =>
    props.active ? iconDotBurgerActive : iconDotBurger});
  background-repeat: no-repeat;
  background-position: center;
`;

const CardToggleButton = ({ onClick }) => {
  const [isActive, setActive] = useState(false);
  const handler = () => {
    setActive(!isActive);
    onClick();
  };
  return <StyledToggleButton onClick={handler} active={isActive} />;
};

export default CardToggleButton
