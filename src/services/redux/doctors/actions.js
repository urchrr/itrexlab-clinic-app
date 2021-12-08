import { doctorSlice } from 'services/redux/doctors/reducers';
import { OCCUPATION_SELECTED, DAY_SELECTED } from 'services/redux/doctors/constants';

export const selectOccupationAction = (id) => ({ type: OCCUPATION_SELECTED, payload: id });
export const selectDayAction = (date, doctorID) => (
  { type: DAY_SELECTED, payload: { date, doctorID } }
);
export const {
  receiveSpecializations: receiveSpecializationsAction,
  receiveDoctorsBySpecId: receiveDoctorsBySpecIdAction,
  receiveVisitFreeTime: receiveVisitFreeTimeAction,
  handleDoctorsErrors: handleDoctorsErrorsAction,
} = doctorSlice.actions;
