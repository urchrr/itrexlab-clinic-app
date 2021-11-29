import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'userAuth',
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
    onSuccessLogin: (state) => {
      state.isLoggedIn = true;
    },
    onFailLogin: (state, payload) => {
      state.isLoggedIn = false;
      state.errors = payload;
    },
    onUpdateProfile: (state, { payload }) => ({ ...state, ...payload }),
  },
});

export default slice.reducer;
