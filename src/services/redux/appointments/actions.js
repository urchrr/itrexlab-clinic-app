import { appointmentsSlice } from 'services/redux/appointments/reducers';
import { RECEIVE_APPOINTMENTS, ADD_APPOINTMENTS } from 'services/redux/appointments/constants';

export const receiveAppointmentsAction = (payload) => ({ type: RECEIVE_APPOINTMENTS, payload });
export const addNewAppointmentAction = (payload) => ({ type: ADD_APPOINTMENTS, payload });
export const {
  receiveAppointment: receiveAppointmentAction,
  handleAppointmentsErrors: handleAppointmentsErrorsAction,
  addAppointment: addAppointmentAction,
} = appointmentsSlice.actions;
