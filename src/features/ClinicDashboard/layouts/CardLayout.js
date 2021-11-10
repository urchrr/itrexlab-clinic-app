import React, {useState} from 'react';
import styled from "styled-components";
import StyledButton from "../core/StyledButton";
import * as constants from "../services/constants";
import {ReactComponent as IconClock} from "../images/icon-clock.svg";
import {ReactComponent as IconClipboard} from "../images/icon-clipboard.svg";
import StyledStatusIndicator from "../core/StyledStatusIndicator";
import caseStatuses from "../../UserAuth/services/caseStatuses";

const Card = styled.article`
  background-color: ${constants.white};
  margin-bottom: 24px;
  box-shadow: 0 4px 32px rgba(218, 228, 255, 0.24);
  border-radius: 12px;
  @media only screen and (min-width: 1024px) {
    margin-bottom: 0;
  }
`

const CardUserArea = styled.div`
  position: relative;
  padding: 16px 24px;
  border-bottom: 1px solid ${constants.greySolid};
  display: grid;
  grid-template-columns: 64px 16px auto 40px;
  grid-template-rows:repeat(2, 32px);
  grid-template-areas:
  'avatar title title button'
  'avatar indicator status button';
  @media only screen and (min-width: 560px) {
    padding: 24px 32px;
    grid-template-rows:32px 16px;
  }
`

const CardAvatar = styled.img`
  grid-area: avatar;
  width: 48px;
  height: 48px;
  border-radius: 50%;
`

const CardTitle = styled.h3`
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
`

const CardStatusIndicator = styled(StyledStatusIndicator)`
  grid-area: indicator;
  margin-top: 4px;
  margin-right: 8px;
`

const CardStatusDescription = styled.p`
  grid-area: status;
  font-weight: 500;
  font-size: 13px;
  line-height: 17px;
  color: ${constants.grey};
  margin: 0;
`

const CardSettingsToggleButton = styled(StyledButton)`
  grid-area: button;
  border: none;
  width: 40px;
  height: 40px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  align-self: center;
  border-radius: 6px;
`

const CardSettings = styled.div`
  visibility: hidden;
  overflow: hidden;
  position: absolute;
  width: 272px;
  height: 0;
  background-color: ${constants.white};
  transition: height .3s ease-out;
  top: 72px;
  right: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 32px rgba(218, 228, 255, 0.54);
  padding: 4px;

  &.visible {
    visibility: visible;
    height: 128px;
  }
`

const CardSettingsButton = styled(StyledButton)`
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
`

const CardCaseArea = styled.div`
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
`

const CardCaseTime = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: ${constants.darkGrey};
`

const CardLayout = ({avatar, name, status, time, result}) => {
    const [isShow, setShow] = useState(false);

    const handleShowSettings = () => {
        setShow(!isShow)
    }

    return (
        <Card>
            <CardUserArea>
                <CardAvatar src={avatar} alt="avatar"/>
                <CardTitle>{name}</CardTitle>
                <CardStatusIndicator className={caseStatuses[status].color}/>
                <CardStatusDescription>{caseStatuses[status].text}</CardStatusDescription>
                <CardSettingsToggleButton onClick={handleShowSettings}/>
                <CardSettings className={`${isShow ? 'visible' : ''}`}>
                    <CardSettingsButton>Create a resolution</CardSettingsButton>
                    <CardSettingsButton>Edit an appointment</CardSettingsButton>
                    <CardSettingsButton style={{color: '#FF2567;'}}>Delete</CardSettingsButton>
                </CardSettings>
            </CardUserArea>
            <CardCaseArea>
                <IconClock style={{width: '24px', height: '24px'}}/>
                <CardCaseTime>{time}</CardCaseTime>
                {result ?
                    <>
                        <IconClipboard style={{width: '24px', height: '24px'}}/>
                        <p style={{margin: '0'}}>{result}</p>
                    </>
                    : ''}
            </CardCaseArea>
        </Card>
    );
}

export default CardLayout
