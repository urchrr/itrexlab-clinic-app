import { createSlice } from '@reduxjs/toolkit';

export const getAppointmentsSlice = createSlice({
  name: 'appointments',
  initialState: {
    isLoading: false,
    errors: [],
    data: [],
  },
  reducers: {
    onPendingReceiveAppointments: (state) => {
      state.isLoading = true;
    },
    onSuccessReceiveAppointments: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    onFailReceiveAppointments: (state, { payload }) => {
      state.isLoading = false;
      state.errors = payload;
    },
  },
});

export const appointmentReducer = getAppointmentsSlice.reducer;
