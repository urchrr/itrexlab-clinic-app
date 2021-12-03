import {
  call, takeLatest, put, fork,
} from 'redux-saga/effects';
import { workerSpecReceive } from 'services/redux/doctors/saga';
import notify from 'services/notify';
import { setToken } from '../../api/instance';
import { USER_LOG_IN, USER_REGISTER } from './constants';
import { getProfile, userLogin, userRegistration } from '../../api/auth/requests';
import {
  pendingUserAction, rejectedUserAction, userLoggedIn, userProfileUpdated, userRegistered,
} from './actions';

function* workerUserLogin({ payload, navigate }) {
  const notification = notify.initial('Please wait...');
  try {
    notify.update(notification, 'pending', 'Processing...');
    put(pendingUserAction());
    const { data: { access_token } } = yield call(() => userLogin(payload));
    setToken(access_token);
    const { data } = yield call(() => getProfile());
    // eslint-disable-next-line no-console
    console.log('last name', data.last_name);
    yield put(userProfileUpdated({ ...data, access_token }));
    yield workerSpecReceive();
    yield put(userLoggedIn());
    notify.update(notification, 'success', 'All good');
    navigate('/clinic');
    notify.closeAll();
  } catch (error) {
    notify.update(notification, 'error', error.message);
    yield put(rejectedUserAction(error));
  }
}
function* workerUserRegistration({ payload, navigate }) {
  const notification = notify.initial('Please wait...');
  try {
    notify.update(notification, 'pending', 'Processing...');
    put(pendingUserAction());
    yield call(() => userRegistration(payload));
    yield put(userRegistered());
    notify.update(notification, 'success', 'Registration successful');
    navigate('/sign-in');
    notify.closeAll();
  } catch (error) {
    notify.update(notification, 'error', error.message);
    yield put(rejectedUserAction(error));
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
