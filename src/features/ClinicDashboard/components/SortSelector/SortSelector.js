import React from 'react'
import styled from 'styled-components'
import { StyledDiv, StyledLabel, StyledButton } from './SortSelectorStyles'
import { ReactComponent as IconChevron } from '../../images/icon-chevron-down.svg'

const StyledIcon = styled(IconChevron)`
    margin-left: 10px;
`

function SortSelector() {
    return (
        <StyledDiv>
            <StyledLabel>Show:</StyledLabel>
            <StyledButton>
                Upcoming
                <StyledIcon />
            </StyledButton>
        </StyledDiv>
    )
}

export default SortSelector
