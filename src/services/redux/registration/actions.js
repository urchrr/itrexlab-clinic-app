import { registrationSlice } from 'services/redux/registration/reducers';
import USER_REGISTERED from './constants';

export const onUserRegistration = (payload) => ({ type: USER_REGISTERED, payload });
export const {
  onPendingRegistration,
  onSuccessRegistration,
  onFailRegistration,
} = registrationSlice.actions;
