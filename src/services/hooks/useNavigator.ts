import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userNavigationPathSelector } from '../redux/user/selectors';
import { useAppSelector } from '../redux/hooks/useAppSelector';

function useNavigator() {
  const navigate = useNavigate();
  const { path } = useAppSelector(userNavigationPathSelector);
  useEffect(() => {
    if (path !== '/') navigate(path);
  }, [path]);
}

export default useNavigator;
