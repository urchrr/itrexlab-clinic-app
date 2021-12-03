import { createSlice } from '@reduxjs/toolkit';

export const doctorSlice = createSlice({
  name: 'doctors',
  initialState: {
    specializations: [],
    bySpecId: [],
    freeTimeVisit: [],
    errors: [],
  },
  reducers: {
    receiveSpecializations: (state, { payload }) => {
      state.specializations = payload;
    },
    receiveDoctorsBySpecId: (state, { payload }) => {
      state.bySpecId = payload;
    },
    receiveVisitFreeTime: (state, { payload }) => {
      state.freeTimeVisit = payload;
    },
    handleDoctorsErrors: (state, { payload }) => {
      state.errors = payload;
    },
  },
});

export default doctorSlice.reducer;
