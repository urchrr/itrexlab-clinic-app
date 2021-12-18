import React, { useState } from 'react';
import caseStatuses from 'features/ClinicDashboard/services/caseStatuses';
import {
  Card,
  CardAvatar,
  CardCaseArea,
  CardCaseHighlightedText,
  CardCaseText,
  CardSettings,
  CardSettingsButton,
  CardSettingsDeleteButton,
  CardStatusDescription,
  CardStatusIndicator,
  CardTitle,
  CardUserArea,
  StyledIconClipboard,
  StyledIconClock,
} from 'features/ClinicDashboard/components/Cards/CardStyles';
import CardToggleButton from '../CardToggleButton';

type CaseCardData = {
  avatar:string,
  name:string,
  status: 'confirmed' | 'waiting' | 'canceled',
  time : string,
  result : string
};
const CaseCard = function (data :CaseCardData) {
  const {
    avatar, name, status, time, result,
  } = data;
  const [isShow, setShow] = useState(false);

  const handleShowSettings = () => {
    setShow(!isShow);
  };

  return (
    <Card>
      <CardUserArea>
        <CardAvatar src={avatar} alt="avatar" />
        <CardTitle>{name}</CardTitle>
        <CardStatusIndicator color={caseStatuses[status].color} />
        <CardStatusDescription>
          {caseStatuses[status].text}
        </CardStatusDescription>
        <CardToggleButton onClick={handleShowSettings} />
        <CardSettings visible={isShow}>
          <CardSettingsButton>Create a resolution</CardSettingsButton>
          <CardSettingsButton>Edit an appointment</CardSettingsButton>
          <CardSettingsDeleteButton>Delete</CardSettingsDeleteButton>
        </CardSettings>
      </CardUserArea>
      <CardCaseArea>
        <StyledIconClock />
        <CardCaseHighlightedText>{time}</CardCaseHighlightedText>
        {result && (
        <>
          <StyledIconClipboard />
          <CardCaseText>{result}</CardCaseText>
        </>
        )}
      </CardCaseArea>
    </Card>
  );
};

export default CaseCard;
