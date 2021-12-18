import { createSlice } from '@reduxjs/toolkit';
import { UserRoles } from '../../../types/userDataTypes';

interface InitialState {
  navigationPath: string,
  isLoggedIn: boolean,
  errors: string[],
  id: string,
  first_name: string,
  last_name: string,
  photo: string,
  role_name: UserRoles,
  access_token: string,
  refresh_token: string,
  status: 'online' | 'offline',
}
const initialState :InitialState = {
  navigationPath: '/',
  isLoggedIn: false,
  errors: [],
  id: '',
  first_name: '',
  last_name: '',
  photo: '',
  role_name: 'unknown',
  access_token: '',
  refresh_token: '',
  status: 'offline',
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    handleUserErrors: (state, { payload }) => {
      state.errors = payload;
    },
    loginUser: (state) => {
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.id = '';
      state.first_name = '';
      state.last_name = '';
      state.photo = '';
      state.role_name = 'unknown';
      state.access_token = '';
      state.refresh_token = '';
      state.status = 'offline';
    },
    updateUserProfile: (state, { payload }) => ({
      ...state, ...payload, status: 'online',
    }),
    setNavigationPath: (state, { payload }) => {
      state.navigationPath = payload;
    },
  },
});

export default userSlice.reducer;
