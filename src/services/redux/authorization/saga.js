import { call, takeLatest, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { errorReq, successReq } from '../../../styles/notificationFiles';
import { setToken } from '../../api/instance';
import USER_LOGGED_IN from './constants';
import { getProfile, userLogin } from '../../api/auth/requests';
import { onFailLoggedIn, onSuccessLoggedIn, onUpdateProfile } from './actions';

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

function* workerLoginSaga({ payload: { values, navigate } }) {
  try {
    // eslint-disable-next-line camelcase
    const { data: { access_token } } = yield call(() => userLogin(values));
    yield put(onSuccessLoggedIn());
    setToken(access_token);
    const { data } = yield call(() => getProfile());
    yield put(onUpdateProfile({ ...data, access_token }));
    yield navigate();
  } catch (error) {
    yield notify(error.response.status, error.response.data);
    yield put(onFailLoggedIn());
  }
}

function* loginSagaWatcher() {
  yield takeLatest(USER_LOGGED_IN, workerLoginSaga);
}

export default loginSagaWatcher;
