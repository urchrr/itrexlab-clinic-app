import {
  call, takeLatest, put, fork,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { errorReq, successReq } from 'styles/notificationFiles';
import {
  getPatientsAllAppointments,
  getDoctorsAllAppointments, createNewAppointment,
} from 'services/api/appointments/requests';
import {
  onPendingReceiveAppointments,
  onSuccessReceiveAppointments,
  onFailReceiveAppointments, appointmentAdded,
} from 'services/redux/appointments/actions';
import { RECEIVE_APPOINTMENTS, ADD_APPOINTMENTS } from 'services/redux/appointments/constants';

toast.configure();

const notify = (status, message) => {
  switch (status) {
    case 200:
      return toast.success('success', successReq);
    case 201:
      return toast.success('success', successReq);
    default:
      return toast.error(message, errorReq);
  }
};

const request = {
  Doctor: getDoctorsAllAppointments,
  Patient: getPatientsAllAppointments,
};

function* workerReceiveAppointments({ payload: { role } }) {
  try {
    yield put(onPendingReceiveAppointments());
    const response = yield call(() => request[role]());
    const { data: { appointments } } = response;
    yield put(onSuccessReceiveAppointments(appointments));
  } catch ({ response: { status, data } }) {
    yield notify(status, data);
    yield put(onFailReceiveAppointments(data));
  }
}
function* workerAddAppointment({ payload: { values, navigate } }) {
  try {
    const { data } = yield call(() => createNewAppointment(values));
    yield put(appointmentAdded(data));
    yield navigate();
    // eslint-disable-next-line no-empty
  } catch (error) {

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
