import React from 'react';
import SignIn from 'features/UserAuth/SignIn';
import SignUp from 'features/UserAuth/SignUp';
import CreateAppointment
  from 'features/ClinicDashboard/components/CreateAppointment/CreateAppointment';
import Appointments from 'features/ClinicDashboard/components/Appointments';
import { AuthPaths, ClinicPaths } from './constants';
import RestorePassForm from '../features/UserAuth/components/RestorePassForm';
import Patients from '../features/ClinicDashboard/components/Patients';
import { LoadingBlock } from '../features/ClinicDashboard/LoadingBlock';

export const authRoutes = [
  {
    path: AuthPaths.signIn,
    component: <SignIn />,
  },
  {
    path: AuthPaths.signUp,
    component: <SignUp />,
  },
  {
    path: AuthPaths.restorePassword,
    component: <RestorePassForm />,
  },
];

export const appRoutes = [
  {
    path: ClinicPaths.appointments,
    component: <Appointments />,
  },
  {
    path: ClinicPaths.createAppointment,
    component: <CreateAppointment />,
  },
  {
    path: ClinicPaths.patients,
    component: <Patients />,
  },
  {
    path: ClinicPaths.resolutions,
    component: <LoadingBlock />,
  },
  {
    path: ClinicPaths.profile,
    component: <LoadingBlock />,
  },
];
