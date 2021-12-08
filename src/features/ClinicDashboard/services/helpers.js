import moment from 'moment';

export const getTimeOfVisit = (visit_date) => {
  const date = new Date(visit_date);
  const h = parseInt(moment(date).format('h'), 10);
  return moment(date).format(`ddd MMM D, YYYY ${h} a - ${h + 1} a`);
};
