import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userDataSelector } from 'services/redux/user/selectors';
import { receiveAppointments } from 'services/redux/appointments/actions';
import { appointmentsSelector } from 'services/redux/appointments/selectors';
import {
  ContentContainer,
  ContentHeaderTitle,
  ContentHeader,
} from '../core/ContentStyles';
import AppointmentsCard from './Cards/AppointmentsCard';
import SortSelector from './SortSelector/SortSelector';
import CreateButton from './CreateButton/CreateButton';

const Appointments = function () {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { role } = useSelector(userDataSelector);
  const appointments = useSelector(appointmentsSelector);
  useEffect(() => {
    dispatch(receiveAppointments({ role }));
  }, []);
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
        {appointments.map((card) => (
          <AppointmentsCard data={card} key={card.id} />
        ))}
      </ContentContainer>
    </>
  );
};

export default Appointments;
