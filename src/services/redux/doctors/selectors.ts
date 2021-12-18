import { firstLetterToUpperCase } from 'services/heplers';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const doctorsSelector = (state: RootState) => state.doctors;

export const specializationsSelector = createSelector(doctorsSelector, (state) => {
  const { specializations } = state;
  return specializations
    .map(({ id, specialization_name }) => (
      { value: id, label: firstLetterToUpperCase(specialization_name) }
    ));
});

export const doctorsBySpecSelector = createSelector(doctorsSelector, (state) => {
  const doctors = state.bySpecId;
  return doctors
    .map(({ first_name, last_name, id }) => ({ value: id, label: `${first_name} ${last_name}` }));
});

export const freeTimeVisitSelector = createSelector(doctorsSelector, (state) => state
  .freeTimeVisit);
