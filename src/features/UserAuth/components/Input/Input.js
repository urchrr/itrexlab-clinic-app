import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import StyledInput from '../../core/StyledInput'
import {
    InputError,
    InputIcon,
    InputWrapper,
    StyledIconEye,
} from './InputStyles'

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
    const showType = isShow ? 'text' : 'password'

    return (
        <InputWrapper>
            <InputIcon src={icon} />
            <StyledInput
                placeholder={placeholder}
                type={type === 'password' ? showType : type}
                {...props}
            />
            {touched && error ? <InputError>{error}</InputError> : null}
            {type === 'password' && <StyledIconEye onClick={handleShow} />}
        </InputWrapper>
    )
}

Input.propTypes = {
    icon: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    touched: PropTypes.bool,
    error: PropTypes.string,
}

export default Input
