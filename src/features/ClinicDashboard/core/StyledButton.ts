import styled from 'styled-components';

const StyledButton = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 15px;
    line-height: 21px;
    background-color: transparent;
    display: flex;
    align-items: center;
    &:last-of-type {
        margin-right: 0;
    }
`;

export default StyledButton;
