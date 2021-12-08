import styled from 'styled-components';

const StyledStatusIndicator = styled.span`
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background-color: ${(props) => props.color};
`;

export default StyledStatusIndicator;
