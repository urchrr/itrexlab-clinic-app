import instance from '../instance';
import {
  newAppointmentEndpoint,
  freeTimeEndpoint,
  allPatientsAppointmentsEndpoint,
  allDoctorsAppointmentsEndpoint,
  appointmentsEndpoint,
} from './endpoints';

export const createNewAppointment = (data) => instance.post(newAppointmentEndpoint, data);

// eslint-disable-next-line max-len,default-param-last
export const getDoctorsAllAppointments = (offset = 0, limit = 6, name, sortBy, order, dateStatus) => instance.get(allDoctorsAppointmentsEndpoint, {
  params: {
    offset,
    limit,
    name,
    sortBy,
    order,
    dateStatus,
  },
});

// eslint-disable-next-line default-param-last,max-len
export const getPatientsAllAppointments = (offset = 0, limit = 6, name, sortBy, order, dateStatus) => instance.get(allPatientsAppointmentsEndpoint, {
  params: {
    offset,
    limit,
    name,
    sortBy,
    order,
    dateStatus,
  },
});

export const deleteAppointment = (id) => instance.delete(`${appointmentsEndpoint}/${id}`);
export const updateAppointment = (id, data) => instance.patch(`${appointmentsEndpoint}/${id}`, data);
export const getFreeAppointmentTime = (date, doctorID) => instance.get(freeTimeEndpoint, {
  params: {
    date,
    doctorID,
  },
});
