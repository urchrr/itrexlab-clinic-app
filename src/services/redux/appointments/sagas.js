import {
  call, takeLatest, put, fork,
} from 'redux-saga/effects';
import {
  getPatientsAllAppointments,
  getDoctorsAllAppointments, createNewAppointment,
} from 'services/api/appointments/requests';
import {
  receiveAppointmentAction,
  handleAppointmentsErrorsAction,
  addAppointmentAction,
} from 'services/redux/appointments/actions';
import { RECEIVE_APPOINTMENTS, ADD_APPOINTMENTS } from 'services/redux/appointments/constants';
import notify from 'services/notify';

const request = {
  Doctor: getDoctorsAllAppointments,
  Patient: getPatientsAllAppointments,
};

function* workerReceiveAppointments({ payload: { role } }) {
  try {
    const response = yield call(request[role]);
    const { data: { appointments } } = response;
    yield put(receiveAppointmentAction(appointments));
  } catch ({ response: { status, data } }) {
    yield put(handleAppointmentsErrorsAction(data));
  }
}
function* workerAddAppointment({ payload: { values, navigate } }) {
  const id = notify.initial('Please wait...');
  try {
    notify.update(id, 'info', 'Saving appointment...');
    yield call(createNewAppointment, values);
    yield put(addAppointmentAction());
    notify.update(id, 'success', 'Saved!');
    navigate();
    notify.closeAll();
  } catch (error) {
    notify.update(id, 'error', error.message);
    yield put(handleAppointmentsErrorsAction(error));
  }
}

function* watcherReceiveAppointments() {
  yield takeLatest(RECEIVE_APPOINTMENTS, workerReceiveAppointments);
}

function* watcherAddAppointment() {
  yield takeLatest(ADD_APPOINTMENTS, workerAddAppointment);
}

function* appointmentSaga() {
  yield fork(watcherReceiveAppointments);
  yield fork(watcherAddAppointment);
}
export default appointmentSaga;
