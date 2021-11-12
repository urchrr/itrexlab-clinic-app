import React from 'react'
import StyledButton from './CreateButtonStyles'
import { ReactComponent as IconPlus } from '../../images/icon-plus.svg'
import styled from 'styled-components'

const StyledIcon = styled(IconPlus)`
    width: 16px;
    height: 16px;
    margin-right: 12px;
    background-position: center;
`

function CreateButton() {
    return (
        <StyledButton>
            <StyledIcon />
            Create an appointment
        </StyledButton>
    )
}

export default CreateButton
