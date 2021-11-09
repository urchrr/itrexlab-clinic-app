import styled from "styled-components";
import iconChevron from '../images/icon-schevron-grey.svg'

const StyledGoBackButton = styled.button`
  outline: none;
  border: none;
  background: url(${iconChevron}) no-repeat center;
  width: 24px;
  height: 24px;
  margin-right: 16px;
  background-color: inherit;
  display: block;
`

export default StyledGoBackButton
