import iconPerson from '../images/icon-person.svg';
import iconEmail from '../images/icon-mail.svg';
import iconLock from '../images/icon-lock.svg';
import iconAccept from '../images/icon-accept.svg';

export const signUpInputList = [
  {
    icon: iconPerson,
    placeholder: 'First Name',
    name: 'firstName',
    testData: 'Greg',
  },
  {
    icon: iconPerson,
    placeholder: 'Second Name',
    name: 'lastName',
    testData: 'NotHouse',
  },
  {
    icon: iconEmail,
    type: 'email',
    placeholder: 'Email',
    name: 'email',
    testData: 'greg@email.com',
  },
  {
    icon: iconLock,
    type: 'password',
    placeholder: 'Password',
    name: 'password',
    testData: '123456',
  },
  {
    icon: iconAccept,
    type: 'password',
    placeholder: 'Confirm password',
    name: 'passwordConfirm',
    testData: '123456',
  },
];

export const signInInputList = [
  {
    icon: iconEmail,
    placeholder: 'Email',
    type: 'email',
    name: 'email',
    testData: 'greg@email.com',
  },
  {
    icon: iconLock,
    placeholder: 'Password',
    type: 'password',
    name: 'password',
    testData: '123456',
  },
];

export const restorePasswordInputList = [
  {
    icon: iconEmail,
    placeholder: 'Email',
    name: 'email',
  },
];
