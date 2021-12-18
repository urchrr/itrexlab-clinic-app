import {
  call, put, takeLatest, fork,
} from 'redux-saga/effects';
import { getSpecializations } from 'services/api/specializations/requests';
import {
  receiveSpecializationsAction,
  receiveDoctorsBySpecIdAction,
  receiveVisitFreeTimeAction,
  handleDoctorsErrorsAction, selectOccupationAction, selectDayAction,
} from 'services/redux/doctors/actions';
import { getDoctorsBySpec } from 'services/api/doctors/requests';
import { getFreeAppointmentTime } from 'services/api/appointments/requests';
import { PayloadAction } from '@reduxjs/toolkit';
import { DaySelected } from '../../../types/doctorsReducerTypes';

export function* workerSpecReceive() {
  try {
    const { data } = yield call(getSpecializations);
    yield put(receiveSpecializationsAction(data));
  } catch (error) {
    yield put(handleDoctorsErrorsAction(error));
  }
}
function* workerOccupationSelected({ payload }:PayloadAction<string>) {
  try {
    const { data } = yield call(getDoctorsBySpec, payload);
    yield put(receiveDoctorsBySpecIdAction(data));
  } catch (error) {
    yield put(handleDoctorsErrorsAction(error));
  }
}
function* workerVisitDaySelected({ payload }:PayloadAction<DaySelected>) {
  try {
    const { data } = yield call(getFreeAppointmentTime, payload);
    yield put(receiveVisitFreeTimeAction(data));
  } catch (error) {
    yield put(handleDoctorsErrorsAction(error));
  }
}

function* watcherVisitDaySelected() {
  yield takeLatest(selectDayAction, workerVisitDaySelected);
}

function* watcherOccupationSelected() {
  yield takeLatest(selectOccupationAction, workerOccupationSelected);
}

function* doctorsSaga() {
  yield fork(watcherOccupationSelected);
  yield fork(watcherVisitDaySelected);
}

export default doctorsSaga;
