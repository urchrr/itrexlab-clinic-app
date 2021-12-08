import {
  call, takeLatest, put, fork,
} from 'redux-saga/effects';
import { workerSpecReceive } from 'services/redux/doctors/saga';
import notify from 'services/notify';
import { setToken, unsetToken } from 'services/api/instance';
import {
  getProfile,
  userLogin,
  userRegistration,
} from 'services/api/auth/requests';
import { USER_LOG_IN, USER_REGISTER, USER_SHADOW_LOG_IN } from './constants';
import {
  handleUserErrorsAction,
  loginUserAction,
  updateUserProfileAction,
  registerUserAction,
  logoutUserAction,
} from './actions';

function* workerUserLogin({ payload, navigate }) {
  const notification = notify.initial('Please wait...');
  try {
    notify.update(notification, 'pending', 'Processing...');
    const response = yield call(userLogin, payload);
    const { data: { access_token, refresh_token } } = response;
    setToken(access_token);
    const { data } = yield call(getProfile);
    yield put(updateUserProfileAction({ ...data, access_token }));
    localStorage.setItem('userData', JSON.stringify({
      ...data,
      access_token,
      refresh_token,
      isLoggedIn: true,
    }));
    yield workerSpecReceive();
    yield put(loginUserAction());
    notify.update(notification, 'success', 'All good');
    navigate('/clinic');
    notify.closeAll();
  } catch (error) {
    notify.update(notification, 'error', notify.errorToMsg(error));
    yield put(handleUserErrorsAction(error));
  }
}
function* workerUserRegistration({ payload, navigate }) {
  const notification = notify.initial('Please wait...');
  try {
    notify.update(notification, 'pending', 'Processing...');
    yield call(userRegistration, payload);
    yield put(registerUserAction());
    notify.update(notification, 'success', 'Registration successful');
    navigate('/sign-in');
    notify.closeAll();
  } catch (error) {
    notify.update(notification, 'error', error);
    yield put(handleUserErrorsAction(error));
  }
}

function* workerUserShadowLogIn({ payload: { accessToken } }) {
  setToken(accessToken);
  try {
    yield call(getProfile);
  } catch (error) {
    notify.printToastErrorMsg('You need to re-login');
    unsetToken();
    localStorage.setItem('userData', JSON.stringify({}));
    put(logoutUserAction());
  }
}

function* watcherUserLogin() {
  yield takeLatest(USER_LOG_IN, workerUserLogin);
}
function* watcherUserRegistration() {
  yield takeLatest(USER_REGISTER, workerUserRegistration);
}
function* watcherUserShadowLogIn() {
  yield takeLatest(USER_SHADOW_LOG_IN, workerUserShadowLogIn);
}

function* userSaga() {
  yield fork(watcherUserShadowLogIn);
  yield fork(watcherUserLogin);
  yield fork(watcherUserRegistration);
}
export default userSaga;
