import styled from 'styled-components'
import * as constants from '../../../services/constants'

export const ContentHeaderTitle = styled.h2`
    color: ${constants.darkGrey};
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    margin: 0;
    flex: 1 0 auto;
    @media only screen and (min-width: 560px) {
        font-size: 24px;
        line-height: 26px;
    }
`

export const ContentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    padding-right: 8px;
    @media only screen and (min-width: 560px) {
        margin-bottom: 32px;
        padding-right: 32px;
    }
    @media only screen and (min-width: 1480px) {
        padding-right: 44px;
    }
`

export const ContentContainer = styled.div`
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
        grid-template-rows: repeat(auto-fill, minmax(217px, 1fr));
        grid-gap: 24px 20px;
    }
    @media only screen and (min-width: 1920px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding-right: 44px;
    }
`
