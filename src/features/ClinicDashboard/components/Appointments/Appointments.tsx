import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { clinicPaths } from 'routes/constants';
import { useAppDispatch } from 'services/redux/hooks/useAppDispatch';
import { useAppSelector } from 'services/redux/hooks/useAppSelector';

const Appointments = function () {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const role = useAppSelector(userRoleSelector);
  const appointments = useAppSelector(appointmentsSelector);
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
            navigate(clinicPaths.createAppointment);
          }}
        />
      </ContentHeader>
      <ContentContainer data-testid="cards-container">
        {appointments.map((card) => (
          <AppointmentsCard {...card} key={card.id} />
        ))}
      </ContentContainer>
    </>
  );
};

export default Appointments;
