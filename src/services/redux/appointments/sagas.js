import {
  call, takeLatest, put, fork,
} from 'redux-saga/effects';
import {
  getPatientsAllAppointments,
  getDoctorsAllAppointments, createNewAppointment,
} from 'services/api/appointments/requests';
import {
  pendingAppointmentsAction,
  appointmentsReceived,
  rejectedAppointmentsAction, appointmentAdded,
} from 'services/redux/appointments/actions';
import { RECEIVE_APPOINTMENTS, ADD_APPOINTMENTS } from 'services/redux/appointments/constants';
import notify from 'services/notify';

const request = {
  Doctor: getDoctorsAllAppointments,
  Patient: getPatientsAllAppointments,
};

function* workerReceiveAppointments({ payload: { role } }) {
  try {
    yield put(pendingAppointmentsAction());
    const response = yield call(() => request[role]());
    const { data: { appointments } } = response;
    yield put(appointmentsReceived(appointments));
  } catch ({ response: { status, data } }) {
    yield put(rejectedAppointmentsAction(data));
  }
}
function* workerAddAppointment({ payload: { values, navigate } }) {
  const id = notify.initial('Please wait...');
  try {
    notify.update(id, 'info', 'Saving appointment...');
    yield put(pendingAppointmentsAction());
    yield call(() => createNewAppointment(values));
    yield put(appointmentAdded());
    yield navigate();
    notify.update(id, 'success', 'Saved!');
  } catch (error) {
    notify.update(id, 'error', error.message);
    yield put(rejectedAppointmentsAction(error));
  } finally {
    notify.closeAll();
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
