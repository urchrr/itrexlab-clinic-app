import { doctorSlice } from 'services/redux/doctors/reducers';
import { OCCUPATION_SELECTED, DAY_SELECTED } from 'services/redux/doctors/constants';

export const occupationSelected = (id) => ({ type: OCCUPATION_SELECTED, payload: id });
export const daySelected = (date, doctorID) => (
  { type: DAY_SELECTED, payload: { date, doctorID } }
);
export const {
  specializationsReceived,
  bySpecIdReceived,
  freeTimeVisitReceived,
} = doctorSlice.actions;
