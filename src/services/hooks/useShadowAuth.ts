import { useEffect } from 'react';
import { userTokensSelector } from 'services/redux/user/selectors';
import { shadowLoginAction } from 'services/redux/user/actions';
import { setToken } from 'services/api/instance';
import { useAppSelector } from '../redux/hooks/useAppSelector';
import { useAppDispatch } from '../redux/hooks/useAppDispatch';

export const useShadowAuth = () => {
  const dispatch = useAppDispatch();
  const tokens = useAppSelector(userTokensSelector);
  setToken(tokens.accessToken);
  useEffect(() => {
    dispatch(shadowLoginAction(tokens));
  }, [dispatch]);
};
