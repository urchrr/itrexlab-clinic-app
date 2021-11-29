import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import firstLetterToUpperCase from 'features/ClinicDashboard/services/helpers';
import moment from 'moment';
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
  const [isShow, setShow] = useState(false);

  const handleShowSettings = () => {
    setShow(!isShow);
  };
  const date = new Date(visit_date);
  const h = parseInt(moment(date).format('h'), 10);
  const time = moment(date).format(`ddd MMM D, YYYY ${h} a - ${h + 1} a`);
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
        <CardSettings visible={isShow}>
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
