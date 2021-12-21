import { userSlice } from 'services/redux/user/reducers';
import { createAction } from '@reduxjs/toolkit';
import { SignInFormValues, SignUpFormValues, Tokens } from 'types/userDataTypes';

export const loginAction = createAction<SignInFormValues>('user/login');

export const registerAction = createAction<SignUpFormValues>('user/register');

export const shadowLoginAction = createAction<Tokens>('user/shadowLogin');

export const {
  handleUserErrors: handleUserErrorsAction,
  loginUser: loginUserAction,
  updateUserProfile: updateUserProfileAction,
  logoutUser: logoutUserAction,
  setNavigationPath: setNavigationPathAction,
} = userSlice.actions;
