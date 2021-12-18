import avatar from '../images/avatar.png';

type Card = {
  name: string,
  avatar: string,
  status:'confirmed' | 'waiting' | 'canceled',
  time: string,
  result: string
};
const getCards = ():Card[] => [
  {
    name: 'Zachary AdkiAdkiAdki',
    avatar,
    status: 'confirmed',
    time: 'Thu Sept 10, 2021 4 pm – 5 pm',
    result: 'We will invite you in for a full review every\n          year\n          and more\n          frequently if you are struggling with blood sugar levels',
  },
  {
    name: 'Zachary AdkiAdkiAdki',
    avatar,
    status: 'waiting',
    time: 'Thu Sept 10, 2021 4 pm – 5 pm',
    result: 'We will invite you in for a full review every\n          year\n          and more\n          frequently if you are struggling with blood sugar levels',
  },
  {
    name: 'Zachary AdkiAdkiAdki',
    avatar,
    status: 'canceled',
    time: 'Thu Sept 10, 2021 4 pm – 5 pm',
    result: 'We will invite you in for a full review every\n          year\n          and more\n          frequently if you are struggling with blood sugar levels',
  },
  {
    name: 'Zachary AdkiAdkiAdki',
    avatar,
    status: 'confirmed',
    time: 'Thu Sept 10, 2021 4 pm – 5 pm',
    result: 'We will invite you in for a full review every\n          year\n          and more\n          frequently if you are struggling with blood sugar levels',
  },
  {
    name: 'Zachary AdkiAdkiAdki',
    avatar,
    status: 'waiting',
    time: 'Thu Sept 10, 2021 4 pm – 5 pm',
    result: 'We will invite you in for a full review every\n          year\n          and more\n          frequently if you are struggling with blood sugar levels',
  },
  {
    name: 'Zachary AdkiAdkiAdki',
    avatar,
    status: 'canceled',
    time: 'Thu Sept 10, 2021 4 pm – 5 pm',
    result: 'We will invite you in for a full review every\n          year\n          and more\n          frequently if you are struggling with blood sugar levels',
  },
  {
    name: 'Zachary AdkiAdkiAdki',
    avatar,
    status: 'confirmed',
    time: 'Thu Sept 10, 2021 4 pm – 5 pm',
    result: 'We will invite you in for a full review every\n          year\n          and more\n          frequently if you are struggling with blood sugar levels',
  },
  {
    name: 'Zachary AdkiAdkiAdki',
    avatar,
    status: 'waiting',
    time: 'Thu Sept 10, 2021 4 pm – 5 pm',
    result: 'We will invite you in for a full review every\n          year\n          and more\n          frequently if you are struggling with blood sugar levels',
  },
  {
    name: 'Zachary AdkiAdkiAdki',
    avatar,
    status: 'canceled',
    time: 'Thu Sept 10, 2021 4 pm – 5 pm',
    result: 'We will invite you in for a full review every\n          year\n          and more\n          frequently if you are struggling with blood sugar levels',
  },
];

export default getCards;
