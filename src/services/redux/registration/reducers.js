import { createSlice } from '@reduxjs/toolkit';

export const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    isLoading: false,
    errors: [],
  },
  reducers: {
    onPendingRegistration: (state) => {
      state.isLoading = true;
    },
    onSuccessRegistration: (state) => {
      state.isLoading = false;
    },
    onFailRegistration: (state, { payload }) => {
      state.errors = payload;
    },
  },
});

export default registrationSlice.reducer;
