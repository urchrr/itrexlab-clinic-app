import { useCallback } from 'react';
import { loginAction, registerAction } from 'services/redux/user/actions';
import { useAppDispatch } from 'services/redux/hooks/useAppDispatch';

export const useAuthorisation = () => {
  const dispatch = useAppDispatch();
  const login = useCallback((data) => {
    dispatch(loginAction(data));
  }, [dispatch]);
  const register = useCallback((data) => {
    dispatch(registerAction(data));
  }, [dispatch]);
  return { login, register };
};
