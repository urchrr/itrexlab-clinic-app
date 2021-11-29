import firstLetterToUpperCase from 'features/ClinicDashboard/services/helpers';

export const specializationsSelector = (state) => {
  const { specializations } = state.doctors;
  return specializations
    .map(({ id, specialization_name }) => (
      { value: id, label: firstLetterToUpperCase(specialization_name) }
    ));
};

export const doctorsBySpecSelector = (state) => {
  const doctors = state.doctors.bySpecId;
  return doctors
    .map(({ first_name, last_name, id }) => ({ value: id, label: `${first_name} ${last_name}` }));
};

export const freeTimeVisitSelector = (state) => state.doctors.freeTimeVisit;
