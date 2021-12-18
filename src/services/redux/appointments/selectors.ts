import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const appointments = (state : RootState) => state.appointments;
export const appointmentsSelector = createSelector(appointments, (state) => state.appointmentList);
