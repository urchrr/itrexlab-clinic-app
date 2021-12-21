import { appointmentsSlice } from 'services/redux/appointments/reducers';
import { createAction } from '@reduxjs/toolkit';
import { CreateAppointmentValues } from 'types/appointments';
import { UserRoles } from '../../../types/userDataTypes';

export const receiveAppointmentsAction = createAction<UserRoles>('appointments/receive2');
export const addNewAppointmentAction = createAction<CreateAppointmentValues>('appointments/addNewAppointment');
export const {
  receiveAppointment: receiveAppointmentAction,
  handleAppointmentsErrors: handleAppointmentsErrorsAction,
} = appointmentsSlice.actions;
