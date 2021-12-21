import moment from 'moment';

export const getTimeOfVisit = (visitDate:string) => {
  const date = new Date(visitDate);
  const h = parseInt(moment(date).format('h'), 10);
  return moment(date).format(`ddd MMM D, YYYY ${h} a - ${h + 1} a`);
};
