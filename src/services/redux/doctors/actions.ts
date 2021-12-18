import { doctorSlice } from 'services/redux/doctors/reducers';
import { createAction } from '@reduxjs/toolkit';
import { DaySelected } from 'types/doctorsReducerTypes';

export const selectOccupationAction = createAction<string>('doctors/occupationSelected');
export const selectDayAction = createAction<DaySelected>('doctors/daySelected');

export const {
  receiveSpecializations: receiveSpecializationsAction,
  receiveDoctorsBySpecId: receiveDoctorsBySpecIdAction,
  receiveVisitFreeTime: receiveVisitFreeTimeAction,
  handleDoctorsErrors: handleDoctorsErrorsAction,
} = doctorSlice.actions;
