import iconPerson from '../images/icon-person.svg';
import iconEmail from '../images/icon-mail.svg';
import iconLock from '../images/icon-lock.svg';
import iconAccept from '../images/icon-accept.svg';

export interface IInput {
  icon: string,
  placeholder: string,
  name: 'firstName' | 'lastName' | 'password' | 'userName' | 'passwordConfirm'
  type?: 'email' | 'text' | 'password',
  testData?: string,
}
export interface IInitialValues {
  userName?: string,
  password?: string,
  firstName?: string,
  lastName?: string,
  passwordConfirm?: string
}
export const signUpInputsInitialValues : IInitialValues = {
  userName: '',
  password: '',
  firstName: '',
  lastName: '',
  passwordConfirm: '',
};
export const signInpInputsInitialValues : IInitialValues = {
  userName: '',
  password: '',
};
export const restorePasswordInitialValues : IInitialValues = {
  userName: '',
};
export const signUpInputList : IInput[] = [
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
    name: 'userName',
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

export const signInInputList : IInput[] = [
  {
    icon: iconEmail,
    placeholder: 'Email',
    type: 'email',
    name: 'userName',
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

export const restorePasswordInputList: IInput[] = [
  {
    icon: iconEmail,
    placeholder: 'Email',
    name: 'userName',
  },
];
