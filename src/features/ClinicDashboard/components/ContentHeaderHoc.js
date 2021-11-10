import React from "react";
import styled from "styled-components";
import * as constants from "../services/constants";

const StyledHeader = styled.h2`
  color: ${constants.darkGrey};
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin: 0;
  flex: 1 0 auto;
  @media only screen and (min-width: 560px) {
    font-size: 24px;
    line-height: 26px;
  }
`

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-right: 8px;
  @media only screen and (min-width: 560px) {
    margin-bottom: 42px;
    padding-right: 32px;
  }
  @media only screen and (min-width: 1480px) {
    padding-right: 44px;
  }
`

const ClinicContentHoc = ({children, title}) => {
    return (
        <StyledDiv>
            <StyledHeader>{title}</StyledHeader>
            {children}
        </StyledDiv>
    )
}

export default ClinicContentHoc
