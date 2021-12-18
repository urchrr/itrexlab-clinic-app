type Status = {
  color: string,
  text: string
};
type Statuses = {
  confirmed: Status,
  waiting: Status,
  canceled: Status
};

const caseStatuses : Statuses = {
  confirmed: {
    color: '#34C197;',
    text: 'Appointment is confirmed',
  },
  waiting: {
    color: '#7297FF;',
    text: 'Waiting for confirmation...',
  },
  canceled: {
    color: '#FF2567;',
    text: 'Appointment is canceled',
  },
};

export default caseStatuses;
