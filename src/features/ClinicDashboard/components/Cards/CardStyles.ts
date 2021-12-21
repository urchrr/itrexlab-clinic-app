import styled, { css } from 'styled-components';
import * as constants from 'services/constants';
import StyledStatusIndicator from 'features/ClinicDashboard/core/StyledStatusIndicator';
import StyledButton from 'features/ClinicDashboard/core/StyledButton';
import { ReactComponent as IconClock } from '../../images/icon-clock.svg';
import { ReactComponent as IconHeart } from '../../images/icon-heart.svg';
import { ReactComponent as IconClipboard } from '../../images/icon-clipboard.svg';

export const Card = styled.article`
    background-color: ${constants.white};
    margin-bottom: 24px;
    box-shadow: 0 4px 32px rgba(218, 228, 255, 0.24);
    border-radius: 12px;
    @media only screen and (min-width: 1024px) {
        margin-bottom: 0;
    }
`;

export const CardUserArea = styled.div`
    position: relative;
    padding: 16px 24px; 
    border-bottom: 1px solid ${constants.greySolid};
    display: grid;
    grid-template-columns: 64px 16px auto 40px;
    grid-template-rows: repeat(2, 32px);
    grid-template-areas:
        'avatar title title button'
        'avatar indicator status button';
    @media only screen and (min-width: 560px) {
        padding: 24px 32px;
        grid-template-rows: 32px 16px;
    }
`;

export const CardAvatar = styled.img`
    grid-area: avatar;
    width: 48px;
    height: 48px;
    border-radius: 50%;
`;

export const CardTitle = styled.h3`
    grid-area: title;
    font-weight: 600;
    font-size: 17px;
    line-height: 22px;
    color: ${constants.darkGrey};
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    align-self: center;
`;

export const CardStatusIndicator = styled(StyledStatusIndicator)`
    grid-area: indicator;
    margin-top: 4px;
    margin-right: 8px;
    background-color: ${(props) => props.color};
`;

export const CardStatusDescription = styled.p`
    grid-area: status;
    font-weight: 500;
    font-size: 13px;
    line-height: 17px;
    color: ${constants.grey};
    margin: 0;
`;
type CardSettingsProps = {
  visible: boolean
};
export const CardSettings = styled.div<CardSettingsProps>`
    visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
    overflow: hidden;
    position: absolute;
    width: 272px;
    height: ${({ visible }) => (visible ? '128px' : '0')};
    background-color: ${constants.white};
    transition: height 0.3s ease-out;
    top: 72px;
    right: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 32px rgba(218, 228, 255, 0.54);
    padding: 4px;
`;

export const CardSettingsButton = styled(StyledButton)`
    width: 100%;
    height: 40px;
    padding-left: 20px;
    padding-right: 20px;
    color: ${constants.darkGrey};
    font-size: 15px;
    line-height: 21px;
    text-align: start;

    &:hover {
        background-color: ${constants.formBackgroundColor};
    }
`;
export const CardSettingsDeleteButton = styled(CardSettingsButton)`
    color: #ff2567;
`;

export const CardCaseArea = styled.div`
    padding: 16px 24px;
    font-size: 15px;
    line-height: 21px;
    color: ${constants.darkGrey};
    display: grid;
    grid-template-columns: 1fr 8fr;
    grid-gap: 24px 16px;
    @media only screen and (min-width: 560px) {
        padding: 24px 32px 40px 32px;
    }
`;

export const CardCaseText = styled.p`
    margin: 0;
    font-size: 15px;
    line-height: 21px;
    color: ${constants.darkGrey};
`;

export const CardCaseHighlightedText = styled(CardCaseText)`
    font-weight: 600;
    line-height: 19px;
`;

export const styledIcon = css`
    width: 24px;
    height: 24px;
`;

export const StyledIconClock = styled(IconClock)`
    ${styledIcon}
`;

export const StyledIconHeart = styled(IconHeart)`
    ${styledIcon}
`;
export const StyledIconClipboard = styled(IconClipboard)`
    ${styledIcon}
`;
