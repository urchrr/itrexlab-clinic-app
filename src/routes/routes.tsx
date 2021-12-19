import React from 'react';
import SignIn from 'features/UserAuth/SignIn';
import SignUp from 'features/UserAuth/SignUp';
import CreateAppointment
  from 'features/ClinicDashboard/components/CreateAppointment/CreateAppointment';
import Appointments from 'features/ClinicDashboard/components/Appointments';
import { AUTH_PATHS, CLINIC_PATHS } from './constants';
import RestorePassForm from '../features/UserAuth/components/RestorePassForm';
import Patients from '../features/ClinicDashboard/components/Patients';
import { LoadingBlock } from '../features/ClinicDashboard/LoadingBlock';

export const authRoutes = [
  {
    path: AUTH_PATHS.SIGN_IN,
    component: <SignIn />,
  },
  {
    path: AUTH_PATHS.SIGN_UP,
    component: <SignUp />,
  },
  {
    path: AUTH_PATHS.RESTORE_PASSWORD,
    component: <RestorePassForm />,
  },
];

export const appRoutes = [
  {
    path: CLINIC_PATHS.APPOINTMENTS,
    component: <Appointments />,
  },
  {
    path: CLINIC_PATHS.CREATE_APPOINTMENT,
    component: <CreateAppointment />,
  },
  {
    path: CLINIC_PATHS.PATIENTS,
    component: <Patients />,
  },
  {
    path: CLINIC_PATHS.RESOLUTIONS,
    component: <LoadingBlock />,
  },
  {
    path: CLINIC_PATHS.PROFILE,
    component: <LoadingBlock />,
  },
];
