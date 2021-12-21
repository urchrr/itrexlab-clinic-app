import { doctorsEndpoint, doctorsBySpecializationIdEndpoint } from 'services/api/doctors/endpoints';
import instance from '../instance';

export const getDoctorProfile = () => instance.get(doctorsEndpoint);

export const getDoctorsBySpec = (id:string) => instance.get(`${doctorsBySpecializationIdEndpoint}/${id}`);
