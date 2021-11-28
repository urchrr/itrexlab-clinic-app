import { slice } from 'services/redux/authorization/reducers';
import USER_LOGGED_IN from './constants';

export const onUserLogin = (payload) => ({ type: USER_LOGGED_IN, payload });
export const { onSuccessLoggedIn, onFailLoggedIn, onUpdateProfile } = slice.actions;
