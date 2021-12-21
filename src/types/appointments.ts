export interface IAppointmentForPatient {
  id: string,
  reason: string,
  note: string,
  patient_id: string,
  doctor_id: string,
  visit_date: string,
  status: StatusesTypes,
  doctor: IDoctor,
}

export interface IDoctor {
  last_name: string,
  first_name: string,
  id: string,
  photo: string,
  specialization_name: string
}

export interface IAppointmentForDoctor {
  id: string,
  reason: string,
  note: string,
  patient_id: string,
  doctor_id: string,
  visit_date: string,
  status: StatusesTypes,
  patient: IPatient,
}

export interface IPatient {
  last_name: string,
  first_name: string,
  id: string,
  photo: string
}

export type StatusesTypes = 'canceled' | 'confirmed' | 'waiting';

export interface IOptions {
  value: string,
  label: string
}

export type CreateAppointmentFormValues = {
  occupation:string,
  doctor: string,
  doctorID: string,
  reason: string,
  note: string,
  day: string,
  date: string,
};

export type CreateAppointmentValues = {
  date: string,
  reason: string,
  note: string,
  doctorID: string
};
export type AppointmentRequestParams = {
  offset: number,
  limit: number,
  name?: string,
  sortBy?: string,
  order?: string,
  dateStatus?: string,
};
