import { createSlice } from '@reduxjs/toolkit';
import { IAppointmentForPatient } from 'types/appointments';

interface InitialState {
  errors: string[],
  appointmentList:IAppointmentForPatient[] | []
}

const initialState : InitialState = {
  errors: [],
  appointmentList: [],
};
export const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    handleAppointmentsErrors: (state, { payload }) => {
      state.errors = payload;
    },
    receiveAppointment: (state, { payload }) => {
      state.appointmentList = payload;
    },
  },
});

export default appointmentsSlice.reducer;
