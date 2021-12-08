import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { getTimeOfVisit } from 'features/ClinicDashboard/services/helpers';
import { firstLetterToUpperCase } from 'services/heplers';
import CardToggleButton from '../CardToogleButton';
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

const AppointmentsCard = function ({
  data: {
    doctor: {
      photo, first_name, last_name, specialization_name,
    }, visit_date, reason,
  },
}) {
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  const handleShowSettings = () => {
    setIsSettingsVisible(!isSettingsVisible);
  };
  const time = getTimeOfVisit(visit_date);
  const name = `${first_name} ${last_name}`;
  return (
    <Card>
      <AppointmentUserArea>
        <CardAvatar src={photo} alt="avatar" />
        <CardTitle>{name}</CardTitle>
        <CardStatusDescription>
          {firstLetterToUpperCase(specialization_name)}
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

AppointmentsCard.propTypes = {
  data: PropTypes.object,
  photo: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  specialization_name: PropTypes.number,
  visit_date: PropTypes.string,
  reason: PropTypes.string,
};

export default AppointmentsCard;
