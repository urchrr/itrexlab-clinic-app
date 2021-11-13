import styled, { css } from 'styled-components'
import { ReactComponent as IconEye } from '../../images/icon-block-eye.svg'

export const InputWrapper = styled.div`
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

export const InputError = styled.span`
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
export const iconStyles = css`
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
export const InputIcon = styled.img`
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
export const StyledIconEye = styled(IconEye)`
    ${iconStyles};
    cursor: pointer;
    right: 18px;
    left: auto;
`
