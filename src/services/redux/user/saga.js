import {
  call, takeLatest, put, fork,
} from 'redux-saga/effects';
import { workerSpecReceive } from 'services/redux/doctors/saga';
import notify from 'services/notify';
import USER_REGISTERED from 'services/redux/registration/constants';
import {
  onFailRegistration,
  onPendingRegistration,
  onSuccessRegistration,
} from 'services/redux/registration/actions';
import { setToken } from '../../api/instance';
import { USER_LOG_IN, USER_REGISTER } from './constants';
import { getProfile, userLogin, userRegistration } from '../../api/auth/requests';
import {
  pendingUserAction, rejectedUserAction, userLoggedIn, userProfileUpdated,
} from './actions';

function* workerUserLogin({ payload: { values, navigate } }) {
  const notification = notify.initial('Please wait...');
  try {
    yield notify.update(notification, 'pending', 'Processing...');
    yield put(pendingUserAction());
    const { data: { access_token } } = yield call(() => userLogin(values));
    setToken(access_token);
    const { data } = yield call(() => getProfile());
    yield put(userProfileUpdated({ ...data, access_token }));
    yield workerSpecReceive();
    yield put(userLoggedIn());
    yield notify.update(notification, 'success', 'All good');
    yield navigate();
  } catch (error) {
    yield notify.update(notification, 'error', error.message);
    yield put(rejectedUserAction(error));
  }
}
function* workerUserRegistration({ payload: { values, navigate } }) {
  const notification = notify.initial('Please wait...');
  try {
    yield notify.update(notification, 'pending', 'Processing...');
    yield put(onPendingRegistration());
    yield call(() => userRegistration(values));
    yield put(onSuccessRegistration());
    yield notify.update(notification, 'success', 'All good');
    yield navigate();
  } catch (error) {
    yield notify.update(notification, 'error', error.message);
    yield put(onFailRegistration(error));
  }
}
function* watcherUserLogin() {
  yield takeLatest(USER_LOG_IN, workerUserLogin);
}
function* watcherUserRegistration() {
  yield takeLatest(USER_REGISTER, workerUserRegistration);
}

function* userSaga() {
  yield fork(watcherUserLogin);
  yield fork(watcherUserRegistration);
}
export default userSaga;
