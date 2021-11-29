import { appointmentsSlice } from 'services/redux/appointments/reducers';
import { RECEIVE_APPOINTMENTS, ADD_APPOINTMENTS } from 'services/redux/appointments/constants';

export const receiveAppointments = (payload) => ({ type: RECEIVE_APPOINTMENTS, payload });
export const addAppointment = (payload) => ({ type: ADD_APPOINTMENTS, payload });
export const {
  onSuccessReceiveAppointments,
  onFailReceiveAppointments,
  onPendingReceiveAppointments,
  appointmentAdded,
} = appointmentsSlice.actions;
