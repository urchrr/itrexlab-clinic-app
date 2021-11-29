import { createSlice } from '@reduxjs/toolkit';

export const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: {
    isLoading: false,
    errors: [],
    appointmentList: [],
  },
  reducers: {
    onPendingReceiveAppointments: (state) => {
      state.isLoading = true;
    },
    onSuccessReceiveAppointments: (state, { payload }) => {
      state.isLoading = false;
      state.appointmentList = payload;
    },
    onFailReceiveAppointments: (state, { payload }) => {
      state.isLoading = false;
      state.errors = payload;
    },
    appointmentAdded: (state, { payload }) => {
      state.appointmentList.push(payload);
    },
    appointmentDeleted: (state, { payload }) => {
      state.appointmentList.filter((item) => item.id !== payload);
    },
  },
});

export const appointmentReducer = appointmentsSlice.reducer;
