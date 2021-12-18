import {
  newAppointmentEndpoint,
  freeTimeEndpoint,
  allPatientsAppointmentsEndpoint,
  allDoctorsAppointmentsEndpoint,
  appointmentsEndpoint,
} from 'services/api/appointments/endpoints';
import instance from '../instance';
import {
  AppointmentRequestParams, CreateAppointmentValues,
  IAppointmentForDoctor,
  IAppointmentForPatient,
} from '../../../types/appointments';
import { DaySelected } from '../../../types/doctorsReducerTypes';

type DoctorAppointmentResponseData = {
  appointments: Array<IAppointmentForDoctor>;
  total: number;
};
type PatientAppointmentResponseData = {
  appointments: Array<IAppointmentForPatient>;
  total: number;
};
export const createNewAppointment = (data:CreateAppointmentValues) => instance
  .post(newAppointmentEndpoint, data);

// eslint-disable-next-line max-len,default-param-last
export const getDoctorsAllAppointments = (params:AppointmentRequestParams) => instance
  .get<DoctorAppointmentResponseData>(allDoctorsAppointmentsEndpoint, { params });

// eslint-disable-next-line default-param-last,max-len
export const getPatientsAllAppointments = (params:AppointmentRequestParams) => instance
  .get<PatientAppointmentResponseData>(allPatientsAppointmentsEndpoint, { params });

export const deleteAppointment = (id:string) => instance.delete(`${appointmentsEndpoint}/${id}`);
/* export const updateAppointment = (id, data) => instance
  .patch(`${appointmentsEndpoint}/${id}`, data); */
export const getFreeAppointmentTime = (params:DaySelected) => instance
  .get<string[]>(freeTimeEndpoint, { params });
