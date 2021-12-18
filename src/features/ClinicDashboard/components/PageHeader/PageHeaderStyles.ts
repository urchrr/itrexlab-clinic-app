import styled from 'styled-components';
import StyledStatusIndicator from 'features/ClinicDashboard/core/StyledStatusIndicator';
import * as constants from 'services/constants';

export const StyledHeader = styled.header`
    display: flex;
    padding: 16px 24px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    @media only screen and (min-width: 560px) {
        padding: 0;
    }
`;

export const StyledHeaderLogo = styled.img`
    width: 132px;
    height: 32px;
`;
export const StyledHeaderUserArea = styled.div`
    position: relative;
    height: 40px;
    display: grid;
    grid-template-columns: auto 40px;
    grid-template-rows: repeat(2, 20px);
    grid-gap: 4px 16px;
    grid-template-areas:
        'name avatar'
        'role avatar';
`;

export const StyledUserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  grid-area: avatar;
`;

export const StyledUserStatusIndicator = styled(StyledStatusIndicator)`
    position: absolute;
    top: -3px;
    right: -3px;
    z-index: 1;
    border: 3px solid ${constants.lightBlue};
    box-sizing: content-box;
    background-color: ${(props) => props.color};
`;
export const StyledHeaderText = styled.p`
    font-weight: 500;
    align-self: center;
    text-overflow: ellipsis;
    text-align: right;
    white-space: nowrap;
`;

export const StyledUserName = styled(StyledHeaderText)`
    font-weight: 600;
    font-size: 15px;
    line-height: 19px;
    text-align: right;
    color: ${constants.darkGrey};
    grid-area: name;
`;

export const StyledUserRole = styled(StyledHeaderText)`
    font-size: 13px;
    line-height: 17px;
    color: ${constants.grey};
    grid-area: role;
`;
