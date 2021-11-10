import styled from "styled-components";
import StyledButton from "./StyledButton";
import * as constants from "../services/constants";

const StyledNavigationButton = styled(StyledButton)`
  padding-top: 12px;
  padding-bottom: 12px;
  min-width: 120px;
  max-width: 160px;
  height: 40px;
  background-color: ${constants.white};
  color: ${constants.blue};
  border-radius: 8px;
  margin-right: 24px;

  &.active {
    color: ${constants.white};
    background-color: ${constants.blue};
    line-height: 19px;
  }

  @media only screen and (min-width: 560px) {
    margin-right: 12px;
    min-width: 160px;
  }
`

export default StyledNavigationButton
