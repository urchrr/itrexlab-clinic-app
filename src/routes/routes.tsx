import React from 'react';
import SignIn from 'features/UserAuth/SignIn';
import SignUp from 'features/UserAuth/SignUp';
import CreateAppointment
  from 'features/ClinicDashboard/components/CreateAppointment/CreateAppointment';
import Appointments from 'features/ClinicDashboard/components/Appointments';
import { authPaths, clinicPaths } from './constants';
import RestorePassForm from '../features/UserAuth/components/RestorePassForm';
import Patients from '../features/ClinicDashboard/components/Patients';
import { LoadingBlock } from '../features/ClinicDashboard/LoadingBlock';

export const authRoutes = [
  {
    path: authPaths.signIn,
    component: <SignIn />,
  },
  {
    path: authPaths.signUp,
    component: <SignUp />,
  },
  {
    path: authPaths.restorePassword,
    component: <RestorePassForm />,
  },
];

export const appRoutes = [
  {
    path: clinicPaths.appointments,
    component: <Appointments />,
  },
  {
    path: clinicPaths.createAppointment,
    component: <CreateAppointment />,
  },
  {
    path: clinicPaths.patients,
    component: <Patients />,
  },
  {
    path: clinicPaths.resolutions,
    component: <LoadingBlock />,
  },
  {
    path: clinicPaths.profile,
    component: <LoadingBlock />,
  },
];
