import instance from '../instance';
import { adminPatientsEndpoint, adminDoctorEndpoint } from './endpoints';

export const createPatient = ({ email, ...data }) => instance.post(adminPatientsEndpoint, {
  userName: email,
  data,
});

export const createDoctor = ({ email, ...data }) => instance.post(adminDoctorEndpoint, {
  userName: email,
  ...data,
});
