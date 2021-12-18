import {
  call, takeLatest, put, fork,
} from 'redux-saga/effects';
import { workerSpecReceive } from 'services/redux/doctors/saga';
import notify from 'services/notify';
import { setToken, unsetToken } from 'services/api/instance';
import {
  getProfile, userLogin, userRegistration,
} from 'services/api/auth/requests';
import { PayloadAction } from '@reduxjs/toolkit';
import { SignInFormValues, SignUpFormValues, Tokens } from 'types/userDataTypes';
import {
  handleUserErrorsAction,
  loginUserAction,
  updateUserProfileAction,
  logoutUserAction, setNavigationPathAction, loginAction, registerAction, shadowLoginAction,
} from './actions';

function* workerUserLogin({ payload } : PayloadAction<SignInFormValues>) {
  const notification = notify.initial('Please wait...');
  try {
    notify.update(notification, 'pending', 'Processing...');
    // @ts-ignore
    const response = yield call(userLogin, payload);
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { data: { access_token, refresh_token } } = response;
    setToken(access_token);
    const { data } = yield call(getProfile);
    yield put(updateUserProfileAction({ ...data, access_token, refresh_token }));
    localStorage.setItem('userData', JSON.stringify({
      ...data, access_token, refresh_token, isLoggedIn: true,
    }));
    yield workerSpecReceive();
    yield put(loginUserAction());
    notify.update(notification, 'success', 'All good');
    notify.closeAll();
  } catch (error:any) {
    notify.update(notification, 'error', notify.errorToMsg(error));
    yield put(handleUserErrorsAction(error));
  }
}

function* workerUserRegistration({ payload } : PayloadAction<SignUpFormValues>) {
  const notification = notify.initial('Please wait...');
  try {
    notify.update(notification, 'pending', 'Processing...');
    yield call(userRegistration, payload);
    notify.update(notification, 'success', 'Registration successful');
    yield put(setNavigationPathAction('/sign-in'));
    notify.closeAll();
  } catch (error:any) {
    notify.update(notification, 'error', error);
    yield put(handleUserErrorsAction(error));
  }
}

function* workerUserShadowLogIn({ payload: { accessToken } }:PayloadAction<Tokens>) {
  try {
    yield call(setToken, accessToken);
    const { data } = yield call(getProfile);
    yield put(updateUserProfileAction({ ...data, access_token: accessToken }));
    yield workerSpecReceive();
  } catch (error:any) {
    unsetToken();
    localStorage.setItem('userData', JSON.stringify({}));
    put(logoutUserAction());
  }
}

function* watcherUserLogin() {
  yield takeLatest(loginAction, workerUserLogin);
}

function* watcherUserRegistration() {
  yield takeLatest(registerAction, workerUserRegistration);
}

function* watcherUserShadowLogIn() {
  yield takeLatest(shadowLoginAction, workerUserShadowLogIn);
}

function* userSaga() {
  yield fork(watcherUserShadowLogIn);
  yield fork(watcherUserLogin);
  yield fork(watcherUserRegistration);
}

export default userSaga;
