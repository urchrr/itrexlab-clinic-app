import { createSlice } from '@reduxjs/toolkit';

export const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: {
    errors: [],
    appointmentList: [],
  },
  reducers: {
    handleAppointmentsErrors: (state, { payload }) => {
      state.errors = payload;
    },
    receiveAppointment: (state, { payload }) => {
      state.appointmentList = payload;
    },
    addAppointment: (state) => {
      state.addedNew = true;
    },
    deleteAppointment: (state, { payload }) => {
      state.appointmentList.filter((item) => item.id !== payload);
    },
  },
});

export const appointmentReducer = appointmentsSlice.reducer;
