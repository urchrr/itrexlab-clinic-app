import instance from '../instance';
import {
  getProfileEndpoint,
  refreshTokenEndpoint,
  userLoginEndpoint,
  userRegistrationEndpoint,
} from './endpoints';

export const userLogin = ({ email, password }) => instance.post(userLoginEndpoint, {
  userName: email,
  password,
});

// eslint-disable-next-line max-len
export const userRegistration = ({ email, passwordConfirm, ...data }) => instance.post(userRegistrationEndpoint, {
  userName: email,
  ...data,
});

export const getProfile = () => instance.get(getProfileEndpoint);
export const getRefreshedToken = () => instance.get(refreshTokenEndpoint);
