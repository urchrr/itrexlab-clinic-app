import { userSlice } from 'services/redux/user/reducers';
import { USER_LOG_IN, USER_REGISTER, USER_SHADOW_LOG_IN } from './constants';

export const loginAction = (payload, navigate) => ({ type: USER_LOG_IN, payload, navigate });
export const registerAction = (payload, navigate) => (
  { type: USER_REGISTER, payload, navigate });
export const shadowLoginAction = (payload) => ({ type: USER_SHADOW_LOG_IN, payload });
export const {
  handleUserErrors: handleUserErrorsAction,
  loginUser: loginUserAction,
  updateUserProfile: updateUserProfileAction,
  registerUser: registerUserAction,
  logoutUser: logoutUserAction,
} = userSlice.actions;
