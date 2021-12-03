import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    errors: [],
    id: '',
    first_name: '',
    last_name: '',
    photo: '',
    role_name: '',
    access_token: '',
  },
  reducers: {
    handleUserErrors: (state, { payload }) => {
      state.errors = payload;
    },
    loginUser: (state) => {
      state.isLoggedIn = true;
    },
    updateUserProfile: (state, { payload }) => ({ ...state, ...payload }),
    registerUser: (state) => {
      state.isNewRegistered = 'true';
    },
  },
});

export default userSlice.reducer;
