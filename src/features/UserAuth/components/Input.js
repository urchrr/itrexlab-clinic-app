import React, {useState} from "react";
import styled from "styled-components";
import StyledInput from '../core/StyledInput'
import iconEye from "../images/icon-block-eye.svg";

const InputWrapper = styled.div`
  margin-bottom: 16px;
  position: relative;

  &:last-of-type {
    margin-bottom: 32px
  }

  @media only screen and (min-width: 560px) {
    margin-bottom: 32px;
    &:last-of-type {
      margin-bottom: 40px;
    }
  }
`
const InputIcon = styled.img`
  box-sizing: border-box;
  border: none;
  position: absolute;
  width: 24px;
  height: 24px;
  top: 8px;
  left: 16px;
  @media only screen and (min-width: 560px) {
    top: 16px;
    left: 24px;
  }
`
const InputBlockEye = styled(InputIcon)`
  cursor: pointer;
  right: 7.2%;
  left: auto;

  @media only screen and (min-width: 560px) {
    right: 6.5%;
    left: auto;
  }
`

const InputError = styled.span`
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.24px;
  color: #f6657f;
  margin-top: 14px;
  display: block;
  @media only screen and (min-width: 560px) {
    margin-top: 8px;
  }
`

const Input = props => {
    const [isShow, setShow] = useState(false)
    const handleShow = _ => {
        setShow(!isShow)
    }
    return (
        <InputWrapper>
            <InputIcon src={props.icon}/>
            <StyledInput placeholder={props.placeholder}
                         type={props.type === 'password' ? (isShow ? 'password' : 'text') : props.type}
                         {...props}
            />
            {props.touched && props.error ? (
                <InputError>{props.error}</InputError>
            ) : null}
            {props.type === 'password' &&
            <InputBlockEye src={iconEye} onClick={handleShow}/>
            }
        </InputWrapper>
    )
}

export default Input
