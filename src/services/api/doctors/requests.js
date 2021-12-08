import instance from '../instance';
import { doctorsEndpoint, doctorsBySpecializationIdEndpoint } from './endpoints';

export const getDoctorProfile = () => instance.get(doctorsEndpoint);

export const getDoctorsBySpec = (id) => instance.get(`${doctorsBySpecializationIdEndpoint}/${id}`);
