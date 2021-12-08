import styled from 'styled-components';
import * as constants from '../../../services/constants';

const StyledHeaderTitle = styled.h1`
    font-size: 20px;
    line-height: 32px;
    color: ${constants.darkGrey};
    font-weight: 600;
    margin: 0;
    @media only screen and (min-width: 560px) {
        width: 560px;
        font-size: 24px;
    }
`;

export default StyledHeaderTitle;
