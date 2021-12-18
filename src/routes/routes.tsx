import React from 'react';
import SignIn from 'features/UserAuth/SignIn';
import SignUp from 'features/UserAuth/SignUp';
import CreateAppointment
  from 'features/ClinicDashboard/components/CreateAppointment/CreateAppointment';
import Appointments from 'features/ClinicDashboard/components/Appointments';
import { AUTH_PATHS, CLINIC_PATHS } from './constants';
import RestorePassForm from '../features/UserAuth/components/RestorePassForm';
import Patients from '../features/ClinicDashboard/components/Patients';

export const authRoutes = [
  {
    exact: false,
    path: AUTH_PATHS.SIGN_IN,
    component: <SignIn />,
  },
  {
    exact: false,
    path: AUTH_PATHS.SIGN_UP,
    component: <SignUp />,
  },
  {
    exact: false,
    path: AUTH_PATHS.RESTORE_PASSWORD,
    component: <RestorePassForm />,
  },
];

export const appRoutes = [
  {
    exact: false,
    path: CLINIC_PATHS.APPOINTMENTS,
    component: <Appointments />,
  },
  {
    exact: false,
    path: CLINIC_PATHS.CREATE_APPOINTMENT,
    component: <CreateAppointment />,
  },
  {
    exact: false,
    path: CLINIC_PATHS.PATIENTS,
    component: <Patients />,
  },

];
