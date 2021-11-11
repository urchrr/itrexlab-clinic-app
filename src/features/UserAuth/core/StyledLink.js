import styled from 'styled-components';
import * as constants from '../services/constants';

const StyledLink = styled.a`
  font-size: 15px;
  line-height: 19px;
  color: ${constants.blue};
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
`;

export default StyledLink;
