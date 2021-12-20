import { StatusesTypes } from 'types/appointments';

type Status = {
  color: string,
  text: string
};

type Record<T extends string, S> = { [Types in T]: S };

const caseStatuses : Record<StatusesTypes, Status> = {
  canceled: {
    color: '#FF2567;',
    text: 'Appointment is canceled',
  },
  confirmed: {
    color: '#34C197;',
    text: 'Appointment is confirmed',
  },
  waiting: {
    color: '#7297FF;',
    text: 'Waiting for confirmation...',
  },

};

export default caseStatuses;
