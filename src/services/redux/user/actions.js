import { userSlice } from 'services/redux/user/reducers';
import { USER_LOG_IN, USER_REGISTER } from './constants';

export const userLogIn = (payload) => ({ type: USER_LOG_IN, payload });
export const userRegister = (payload) => ({ type: USER_REGISTER, payload });
export const {
  pendingUserAction,
  rejectedUserAction,
  userLoggedIn,
  userProfileUpdated,
  userRegistered,
} = userSlice.actions;
