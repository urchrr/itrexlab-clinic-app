import { userSlice } from 'services/redux/user/reducers';
import { USER_LOG_IN, USER_REGISTER } from './constants';

export const userLogIn = (payload, navigate) => ({ type: USER_LOG_IN, payload, navigate });
export const userRegister = (payload, navigate) => ({ type: USER_REGISTER, payload, navigate });
export const {
  pendingUserAction,
  rejectedUserAction,
  userLoggedIn,
  userProfileUpdated,
  userRegistered,
} = userSlice.actions;
