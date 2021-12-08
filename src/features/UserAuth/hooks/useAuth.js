import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { loginAction, registerAction } from 'services/redux/user/actions';

export const useAuthorisation = () => {
  const dispatch = useDispatch();
  const login = useCallback((data, navigate) => {
    dispatch(loginAction(data, navigate));
  }, [dispatch]);
  const register = useCallback((data, navigate) => {
    dispatch(registerAction(data, navigate));
  }, [dispatch]);
  return { login, register };
};
