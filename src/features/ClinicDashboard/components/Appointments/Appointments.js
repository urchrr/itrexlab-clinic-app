import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userRoleSelector } from 'services/redux/user/selectors';
import { receiveAppointmentsAction } from 'services/redux/appointments/actions';
import { appointmentsSelector } from 'services/redux/appointments/selectors';
import {
  ContentContainer,
  ContentHeaderTitle,
  ContentHeader,
} from 'features/ClinicDashboard/core/ContentStyles';
import AppointmentsCard from 'features/ClinicDashboard/components/Cards/AppointmentsCard';
import SortSelector from 'features/ClinicDashboard/components/SortSelector/SortSelector';
import CreateButton from 'features/ClinicDashboard/components/CreateButton/CreateButton';

const Appointments = function () {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const role = useSelector(userRoleSelector);
  const appointments = useSelector(appointmentsSelector);
  useEffect(() => {
    dispatch(receiveAppointmentsAction(role));
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
