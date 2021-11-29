import { createSlice } from '@reduxjs/toolkit';

export const doctorSlice = createSlice({
  name: 'doctors',
  initialState: {
    specializations: [],
    bySpecId: [],
    freeTimeVisit: [],
  },
  reducers: {
    specializationsReceived: (state, { payload }) => {
      state.specializations = payload;
    },
    bySpecIdReceived: (state, { payload }) => {
      state.bySpecId = payload;
    },
    freeTimeVisitReceived: (state, { payload }) => {
      state.freeTimeVisit = payload;
    },
  },
});

export default doctorSlice.reducer;
