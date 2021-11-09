import styled from "styled-components";
import * as constants from "../services/constants";


const StyledInput = styled.input.attrs((props) => ({
    minLength: `${constants.minNameLength}`,
    autoComplete: 'off',
    required: true,
    noValidate: true
}))`
  width: 100%;
  border: 1px solid ${constants.greySolid};
  border-radius: 8px;
  color: ${constants.darkGrey};
  padding: 7px 47px;
  background-position-y: center;
  background-position-x: 18px;
  background-color: ${constants.white};
  font-size: 15px;
  line-height: 24px;

  &:focus {
    border: 1px solid ${constants.blue};
    outline: none;
  }

  &::placeholder {
    font-size: 15px;
    line-height: 24px;
    color: ${constants.grey};
  }

  &.invalid {
    border: 1px solid #ff2567;
  }

  &.invalid:focus {
    border: 1px solid #ff2567;
    outline: none;
  }

  @media only screen and (min-width: 560px) {
    font-size: 17px;
    padding: 15px 64px;
    &::placeholder {
      font-size: 17px;
    }
  }
`

export default StyledInput
