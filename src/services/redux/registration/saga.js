import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { userRegistration } from 'services/api/auth/requests';
import { errorReq, successReq } from 'styles/notificationFiles';
import {
  onFailRegistration,
  onPendingRegistration,
  onSuccessRegistration,
} from 'services/redux/registration/actions';
import USER_REGISTERED from './constants';

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

function* workerRegistrationSaga({ payload: { values, navigate } }) {
  try {
    yield put(onPendingRegistration());
    yield call(() => userRegistration(values));
    yield put(onSuccessRegistration());
    yield navigate();
  } catch (error) {
    yield put(onFailRegistration(error));
    yield notify(error.response.status, error.response.data);
  }
}

function* registrationSagaWatcher() {
  yield takeLatest(USER_REGISTERED, workerRegistrationSaga);
}

export default registrationSagaWatcher;
