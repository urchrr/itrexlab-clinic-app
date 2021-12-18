import React, { useState } from 'react';
import styled from 'styled-components';

import { getTimeOfVisit } from 'features/ClinicDashboard/services/helpers';
import { firstLetterToUpperCase } from 'services/heplers';
import { IAppointmentForPatient } from 'types/appointments';
import CardToggleButton from '../CardToggleButton';
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
  CardTitle,
  CardUserArea,
  StyledIconClock,
  StyledIconHeart,
} from './CardStyles';

const AppointmentUserArea = styled(CardUserArea)`
    grid-template-areas:
        'avatar title title button'
        'avatar status status button';
`;

const AppointmentsCard = function (data : IAppointmentForPatient) {
  const { visit_date: visitDate, reason, doctor } = data;
  const {
    photo, first_name: firstName, last_name: lastName, specialization_name: specialization,
  } = doctor;
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  const handleShowSettings = () => {
    setIsSettingsVisible(!isSettingsVisible);
  };
  const time = getTimeOfVisit(visitDate);
  const name = `${firstName} ${lastName}`;
  return (
    <Card data-testid="card">
      <AppointmentUserArea>
        <CardAvatar src={photo} alt="avatar" />
        <CardTitle>{name}</CardTitle>
        <CardStatusDescription>
          {firstLetterToUpperCase(specialization)}
        </CardStatusDescription>
        <CardToggleButton onClick={handleShowSettings} />
        <CardSettings visible={isSettingsVisible}>
          <CardSettingsButton>Create a resolution</CardSettingsButton>
          <CardSettingsButton>Edit an appointment</CardSettingsButton>
          <CardSettingsDeleteButton>Delete</CardSettingsDeleteButton>
        </CardSettings>
      </AppointmentUserArea>
      <CardCaseArea>
        <StyledIconClock />
        <CardCaseHighlightedText>{time}</CardCaseHighlightedText>
        {reason && (
        <>
          <StyledIconHeart />
          <CardCaseText>{firstLetterToUpperCase(reason)}</CardCaseText>
        </>
        )}
      </CardCaseArea>
    </Card>
  );
};
export default AppointmentsCard;
