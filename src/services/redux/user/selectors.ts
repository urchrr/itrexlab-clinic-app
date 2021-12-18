import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const userSelector = (state: RootState) => state.user;
export const isLoggedInSelector = createSelector(userSelector, (state) => state.isLoggedIn);
export const userDataSelector = createSelector(userSelector, (state) => ({
  firstName: state.first_name,
  lastName: state.last_name,
  avatar: state.photo,
  role: state.role_name,
  status: state.status,
}));

export const userRoleSelector = createSelector(userSelector, (state) => state.role_name);

export const userTokensSelector = createSelector(userSelector, (state) => ({
  accessToken: state.access_token,
  refreshToken: state.refresh_token,
}));

export const userNavigationPathSelector = createSelector(userSelector, (state) => ({
  path: state.navigationPath,
}));
