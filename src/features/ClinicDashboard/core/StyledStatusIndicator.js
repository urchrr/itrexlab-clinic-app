import styled from "styled-components";
import * as constants from "../services/constants";

const StyledStatusIndicator = styled.span`
  border-radius: 50%;
  width: 8px;
  height: 8px;

  &.green {
    background-color: ${constants.green};
  }

  &.red {
    background-color: ${constants.red};
  }

  &.blue {
    background-color: ${constants.blue};
  }
`

export default StyledStatusIndicator
