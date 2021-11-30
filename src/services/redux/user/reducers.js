import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    errors: [],
    id: '',
    first_name: '',
    second_name: '',
    photo: '',
    role_name: '',
    access_token: '',
  },
  reducers: {
    pendingUserAction: (state) => {
      state.isLoading = true;
    },
    rejectedUserAction: (state, { payload }) => {
      state.isLoading = false;
      state.errors = payload;
    },
    userLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
    userProfileUpdated: (state, { payload }) => ({ ...state, ...payload }),
    userRegistered: (state) => {
      state.isLoading = false;
    },
  },
});

export default userSlice.reducer;
