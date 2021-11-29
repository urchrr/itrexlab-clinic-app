import {
  call, takeLatest, put,
} from 'redux-saga/effects';
import { workerSpecReceive } from 'services/redux/doctors/saga';
import { setToken } from '../../api/instance';
import USER_LOGIN from './constants';
import { getProfile, userLogin } from '../../api/auth/requests';
import { onFailLogin, onSuccessLogin, onUpdateProfile } from './actions';

function* workerLoginSaga({ payload: { values, navigate } }) {
  try {
    const { data: { access_token } } = yield call(() => userLogin(values));
    setToken(access_token);
    const { data } = yield call(() => getProfile());
    yield put(onUpdateProfile({ ...data, access_token }));
    yield workerSpecReceive();
    yield put(onSuccessLogin());
    yield navigate();
  } catch (error) {
    yield put(onFailLogin(error));
  }
}

function* loginSagaWatcher() {
  yield takeLatest(USER_LOGIN, workerLoginSaga);
}

export default loginSagaWatcher;
