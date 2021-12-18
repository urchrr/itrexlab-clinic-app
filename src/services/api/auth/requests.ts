import {
  getProfileEndpoint,
  refreshTokenEndpoint,
  userLoginEndpoint,
  userRegistrationEndpoint,
} from 'services/api/auth/endpoints';
import instance from '../instance';
import { SignInFormValues, SignUpFormValues } from '../../../types/userDataTypes';

export const userLogin = (loginData: SignInFormValues) => instance
  .post<string>(userLoginEndpoint, loginData);

export const userRegistration = (registrationData: SignUpFormValues) => instance
  .post<string>(userRegistrationEndpoint, registrationData);

export const getProfile = () => instance.get(getProfileEndpoint);
export const getRefreshedToken = () => instance.get(refreshTokenEndpoint);
