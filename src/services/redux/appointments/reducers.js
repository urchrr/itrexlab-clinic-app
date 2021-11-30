import { createSlice } from '@reduxjs/toolkit';

export const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: {
    isLoading: false,
    errors: [],
    appointmentList: [],
  },
  reducers: {
    pendingAppointmentsAction: (state) => {
      state.isLoading = true;
    },
    rejectedAppointmentsAction: (state, { payload }) => {
      state.isLoading = false;
      state.errors = payload;
    },
    appointmentsReceived: (state, { payload }) => {
      state.isLoading = false;
      state.appointmentList = payload;
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
