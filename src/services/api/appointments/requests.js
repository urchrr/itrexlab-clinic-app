import instance from '../instance';
import {
  newAppointmentEndpoint,
  freeTimeEndpoint,
  allPatientsAppointmentsEndpoint,
  allDoctorsAppointmentsEndpoint,
  appointmentsEndpoint,
} from './endpoints';

export const createNewAppointment = (data) => instance.post(newAppointmentEndpoint, data);
// sortBy = firstNameSort , lastNameSort,dateSort
// order = Desc, Asc
// dateStatus = Upcoming, Outdate
/* Object.keys(params).reduce((init, paramName, index, array) => {
  let param;
  if (index === (array.length - 1)) {
    param = `${paramName}=${params[paramName]}&`;
  } else { param = `${paramName}=${params[paramName]}`; }
  return init.concat(param);
}, '?');
const createURL = (endpoint, params) => `${endpoint}`; */

// eslint-disable-next-line max-len,default-param-last
export const getDoctorsAllAppointments = (offset = 1, limit = 10, name, sortBy, order, dateStatus) => instance.get(allDoctorsAppointmentsEndpoint, {
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
export const getPatientsAllAppointments = (offset = 0, limit = 10, name, sortBy, order, dateStatus) => instance.get(allPatientsAppointmentsEndpoint, {
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
export const getFreeAppointmentTime = (data, doctorId) => instance.get(freeTimeEndpoint, {
  params: {
    data,
    doctorId,
  },
});
