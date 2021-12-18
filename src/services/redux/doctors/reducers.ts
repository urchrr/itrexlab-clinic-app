import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  specializations: {
    'specialization_name': string,
    'id': string
  }[],
  bySpecId: {
    'firstName': string,
    'lastName': string,
    'id': string
  }[],
  freeTimeVisit: string[],
  errors: string | string[],
};

const initialState : InitialState = {
  specializations: [],
  bySpecId: [],
  freeTimeVisit: [],
  errors: [],
};

export const doctorSlice = createSlice({
  name: 'doctors',
  initialState,
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
