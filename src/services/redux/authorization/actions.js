import { slice } from 'services/redux/authorization/reducers';
import USER_LOGIN from './constants';

export const onUserLogin = (payload) => ({ type: USER_LOGIN, payload });
export const { onSuccessLogin, onFailLogin, onUpdateProfile } = slice.actions;
