import { createSlice } from '@reduxjs/toolkit';

const {
  isLoggedIn, id, first_name, last_name, photo, role_name, access_token, refresh_token,
} = JSON.parse(localStorage.getItem('userData')) || {};
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: isLoggedIn || false,
    errors: [],
    id: id || '',
    first_name: first_name || '',
    last_name: last_name || '',
    photo: photo || '',
    role_name: role_name || '',
    access_token: access_token || '',
    refresh_token: refresh_token || '',
  },
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
      state.role_name = '';
      state.access_token = '';
      state.refresh_token = '';
    },
    updateUserProfile: (state, { payload }) => ({ ...state, ...payload }),
    registerUser: (state) => {
      state.isNewRegistered = 'true';
    },
  },
});

export default userSlice.reducer;
