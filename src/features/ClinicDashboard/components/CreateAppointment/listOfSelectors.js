import { doctorsBySpecSelector, specializationsSelector } from 'services/redux/doctors/selectors';

const listOfSelectors = [
  { label: 'Occupation *', name: 'occupation', optionsSelector: specializationsSelector },
  { label: 'Doctor`s name *', name: 'doctorID', optionsSelector: doctorsBySpecSelector },
];

export default listOfSelectors;
