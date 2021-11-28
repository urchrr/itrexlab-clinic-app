import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'userAuth',
  initialState: {
    isLoggedIn: false,
    id: '',
    first_name: '',
    second_name: '',
    photo: '',
    role_name: '',
    access_token: '',
  },
  reducers: {
    onSuccessLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
    onFailLoggedIn: (state) => {
      state.isLoggedIn = false;
    },
    onUpdateProfile: (state, { payload }) => ({ ...state, ...payload }),
  },
});

export default slice.reducer;
