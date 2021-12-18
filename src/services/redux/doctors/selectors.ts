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
    .map(({ firstName, lastName, id }) => ({ value: id, label: `${firstName} ${lastName}` }));
});

export const freeTimeVisitSelector = createSelector(doctorsSelector, (state) => state
  .freeTimeVisit);
