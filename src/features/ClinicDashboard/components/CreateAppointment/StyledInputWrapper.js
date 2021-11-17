import React from 'react'
import styled from 'styled-components'
import * as PropTypes from 'prop-types'

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

const StyledInputWrapper = ({ label, children, errors }) => (
    <StyledWrapper>
        <StyledLabel>{label}</StyledLabel>
        {children}
    </StyledWrapper>
)
StyledWrapper.propTypes = { children: PropTypes.node }
StyledInputWrapper.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
}

export default StyledInputWrapper
