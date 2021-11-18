import React, { useEffect } from 'react'
import styled from 'styled-components'
import * as PropTypes from 'prop-types'
import { InputError } from '../../../UserAuth/components/Input/InputStyles'

const StyledLabel = styled.label`
    font-weight: 500;
    font-size: 13px;
    line-height: 17px;
    color: #000000;
    margin-bottom: 16px;
`

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    &:last-of-type {
        margin-bottom: 0;
    }
`

const StyledInputWrapper = ({ label, children, error, touched }) => {
    useEffect(() => {
        console.log(error, touched, label, 'ii')
    }, [error, touched])

    return (
        <StyledWrapper>
            <StyledLabel>{label}</StyledLabel>
            {children}
            {touched && error ? <InputError>{error}</InputError> : null}
        </StyledWrapper>
    )
}
StyledWrapper.propTypes = { children: PropTypes.node }
StyledInputWrapper.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
}

export default StyledInputWrapper
