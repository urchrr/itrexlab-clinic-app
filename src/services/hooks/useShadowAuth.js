import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userTokensSelector } from 'services/redux/user/selectors';
import { shadowLoginAction } from 'services/redux/user/actions';
import { setToken } from 'services/api/instance';

export const useShadowAuth = () => {
  const dispatch = useDispatch();
  const tokens = useSelector(userTokensSelector);
  setToken(tokens.accessToken);
  useEffect(() => {
    dispatch(shadowLoginAction(tokens));
  }, [dispatch]);
};
