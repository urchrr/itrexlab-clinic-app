import styled from 'styled-components'
import StyledButton from './StyledButton'
import * as constants from '../../../services/constants'

const StyledNavigationButton = styled(StyledButton)`
    padding-top: 12px;
    padding-bottom: 12px;
    font-weight: ${(props) => (props.isActive ? '600' : '400')};
    min-width: 120px;
    max-width: 160px;
    height: 40px;
    background-color: ${(props) =>
        props.isActive ? constants.blue : constants.white};
    color: ${(props) => (props.isActive ? constants.white : constants.blue)};
    border-radius: 8px;
    margin-right: 24px;
    line-height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (min-width: 560px) {
        margin-right: 12px;
        min-width: 160px;
    }
`

export default StyledNavigationButton
