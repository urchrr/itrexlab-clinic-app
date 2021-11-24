import firstLetterToUpperCase from '../../services/helpers';
import occupations from './occupations';
import doctorsNames from './doctorsNames';

const getOptions = (array) => array.map((value) => ({
  value,
  label: firstLetterToUpperCase(value),
}));
const occupationsOptions = getOptions(occupations);
const doctorsNamesOptions = getOptions(doctorsNames);
const listOfSelectors = [
  { label: 'Occupation', name: 'occupation', options: occupationsOptions },
  { label: 'Doctor`s name', name: 'doctor', options: doctorsNamesOptions },
];
export default listOfSelectors;
