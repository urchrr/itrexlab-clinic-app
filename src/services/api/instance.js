import axios from 'axios';
import baseURL from './baseUrl';

const instance = axios.create({
  baseURL,
  timeout: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
instance.defaults.timeout = 10000;
export const setToken = (token) => { instance.defaults.headers.common.Authorization = `Bearer ${token}`; };

export const unsetToken = () => { instance.defaults.headers.common.Authorization = ''; };

export default instance;
