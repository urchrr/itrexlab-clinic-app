import styled, { css } from 'styled-components';
import * as constants from '../../../../services/constants';

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 104px;

    &:nth-of-type(3) {
        margin-right: 0;
    }
`;
export const sectionHeadingStyles = css`
    font-size: 17px;
    line-height: 24px;
    font-weight: normal;
    display: flex;
    align-items: center;
    color: #a1abc9;
`;
export const StyledHeading = styled.h3`
    ${sectionHeadingStyles};
    margin-bottom: 40px;
`;

export const StyledNumber = styled.span`
    ${sectionHeadingStyles};
    border: 1px solid #a1abc9;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    text-align: center;
    margin-right: 16px;
    justify-content: center;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-right: 32px;
    height: calc(100% - 180px);
`;

export const StyledInput = styled.input`
    width: 100%;
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 32px rgba(218, 228, 255, 0.36);
    border: 1px solid #dce0ec;
    font-size: 17px;
    line-height: 24px;

    &::placeholder {
        color: #a1abc9;
    }
`;

export const StyledSubmitWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
`;
export const StyledSubmitButton = styled.button.attrs(() => ({
  type: 'submit',
}))`
    cursor: pointer;
    border-radius: 8px;
    background: ${constants.blue};
    color: #ffffff;
    padding: 16px 25px 16px 24px;
    outline: none;
    border: none;
    width: 160px;
    height: 56px;
    font-size: 17px;
    line-height: 24px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;

    &:disabled {
        background: #dce0ec;
        cursor: default;
    }
`;
