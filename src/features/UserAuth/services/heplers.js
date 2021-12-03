import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { userLogIn, userRegister } from 'services/redux/user/actions';

export const getInitialValuesFromInputList = (list) => list
  .reduce((init, { name }) => { init[name] = ''; return init; }, {});

export const useAuthorisation = () => {
  const dispatch = useDispatch();
  const login = useCallback((data, navigate) => {
    dispatch(userLogIn(data, navigate));
  }, [dispatch]);
  const register = useCallback((data, navigate) => {
    dispatch(userRegister(data, navigate));
  }, [dispatch]);
  return { login, register };
};
