import { getAppointmentsSlice } from 'services/redux/appointments/reducers';
import RECEIVE_APPOINTMENTS from 'services/redux/appointments/constants';

export const receiveAppointments = (payload) => ({ type: RECEIVE_APPOINTMENTS, payload });
export const {
  onSuccessReceiveAppointments,
  onFailReceiveAppointments,
  onPendingReceiveAppointments,
} = getAppointmentsSlice.actions;
