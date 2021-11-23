import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ContentContainer,
  ContentHeaderTitle,
  ContentHeader,
} from '../core/ContentStyles';
import AppointmentsCard from './Cards/AppointmentsCard';
import SortSelector from './SortSelector/SortSelector';
import CreateButton from './CreateButton/CreateButton';
import getAppointments from '../services/getAppointments';

const Appointments = function () {
  const navigate = useNavigate();
  return (
    <>
      <ContentHeader>
        <ContentHeaderTitle>My Appointments</ContentHeaderTitle>
        <SortSelector label="Show:" text="Upcoming" />
        <CreateButton
          onClick={() => {
            navigate('/clinic/create-appointment');
          }}
        />
      </ContentHeader>
      <ContentContainer>
        {getAppointments().map((card, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <AppointmentsCard data={card} key={index} />
        ))}
      </ContentContainer>
    </>
  );
};

export default Appointments;
