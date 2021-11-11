import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import StyledInput from '../core/StyledInput'
import iconEye from '../images/icon-block-eye.svg'

const InputWrapper = styled.div`
    margin-bottom: 16px;
    position: relative;

    &:last-of-type {
        margin-bottom: 32px;
    }

    @media only screen and (min-width: 560px) {
        margin-bottom: 32px;
        &:last-of-type {
            margin-bottom: 40px;
        }
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

const Input = ({
    icon,
    placeholder,
    type = 'text',
    touched,
    error,
    ...props
}) => {
    const [isShow, setShow] = useState(false)
    const handleShow = () => {
        setShow(!isShow)
    }
    return (
        <InputWrapper>
            <InputIcon src={icon} />
            <StyledInput
                placeholder={placeholder}
                type={
                    type === 'password' ? (isShow ? 'text' : 'password') : type
                }
                {...props}
            />
            {touched && error ? <InputError>{error}</InputError> : null}
            {type === 'password' && (
                <InputBlockEye src={iconEye} onClick={handleShow} />
            )}
        </InputWrapper>
    )
}

Input.propTypes = {
    icon: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    touched: PropTypes.bool,
    error: PropTypes.object,
}

export default Input
