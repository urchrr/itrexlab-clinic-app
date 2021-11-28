import { call, takeLatest, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { errorReq, successReq } from 'styles/notificationFiles';
import {
  getPatientsAllAppointments,
  getDoctorsAllAppointments,
} from 'services/api/appointments/requests';
import {
  onPendingReceiveAppointments,
  onSuccessReceiveAppointments,
  onFailReceiveAppointments,
} from 'services/redux/appointments/actions';
import RECEIVE_APPOINTMENTS from 'services/redux/appointments/constants';

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

function* workerAppointmentsSaga({ payload: { role } }) {
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

function* receiveAppointmentsSaga() {
  yield takeLatest(RECEIVE_APPOINTMENTS, workerAppointmentsSaga);
}

export default receiveAppointmentsSaga;
