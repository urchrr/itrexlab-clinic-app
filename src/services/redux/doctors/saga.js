import {
  call, put, takeLatest, fork,
} from 'redux-saga/effects';
import { getSpecializations } from 'services/api/specializations/requests';
import {
  receiveSpecializationsAction,
  receiveDoctorsBySpecIdAction,
  receiveVisitFreeTimeAction,
  handleDoctorsErrorsAction,
} from 'services/redux/doctors/actions';
import { getDoctorsBySpec } from 'services/api/doctors/requests';
import { DAY_SELECTED, OCCUPATION_SELECTED } from 'services/redux/doctors/constants';
import { getFreeAppointmentTime } from 'services/api/appointments/requests';

export function* workerSpecReceive() {
  try {
    const { data } = yield call(getSpecializations);
    yield put(receiveSpecializationsAction(data));
  } catch (error) {
    yield put(handleDoctorsErrorsAction(error));
  }
}
function* workerOccupationSelected({ payload }) {
  try {
    const { data } = yield call(getDoctorsBySpec, payload);
    yield put(receiveDoctorsBySpecIdAction(data));
  } catch (error) {
    yield put(handleDoctorsErrorsAction(error));
  }
}
function* workerVisitDaySelected({ payload: { date, doctorID } }) {
  try {
    const { data } = yield call(getFreeAppointmentTime, date, doctorID);
    yield put(receiveVisitFreeTimeAction(data));
  } catch (error) {
    yield put(handleDoctorsErrorsAction(error));
  }
}

function* watcherVisitDaySelected() {
  yield takeLatest(DAY_SELECTED, workerVisitDaySelected);
}

function* watcherOccupationSelected() {
  yield takeLatest(OCCUPATION_SELECTED, workerOccupationSelected);
}

function* doctorsSaga() {
  yield fork(watcherOccupationSelected);
  yield fork(watcherVisitDaySelected);
}

export default doctorsSaga;
