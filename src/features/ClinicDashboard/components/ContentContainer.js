import React from 'react'

import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    height: calc(100% - 110px);
    @media only screen and (min-width: 560px) {
        padding-right: 32px;
    }
    @media only screen and (min-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        grid-gap: 24px 20px;
    }
    @media only screen and (min-width: 1920px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding-right: 44px;
    }
`

const ContentContainer = ({ children }) => (
    <StyledContainer>{children}</StyledContainer>
)

ContentContainer.propTypes = {
    children: PropTypes.array,
}

export default ContentContainer
