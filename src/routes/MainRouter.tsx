import {
  Route, Routes, useNavigate,
} from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AuthPageLayout from '../features/UserAuth/layouts/AuthPageLayout';
import Clinic from '../features/ClinicDashboard/layouts/DashboardLayout';
import { isLoggedInSelector } from '../services/redux/user/selectors';
import { AUTH_PATHS, CLINIC_PATHS } from './constants';
import ProtectedComponent from './ProtectedComponent';
import { appRoutes, authRoutes } from './routes';
import useNavigator from '../services/hooks/useNavigator';

const MainRouter = function () {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(isLoggedIn ? CLINIC_PATHS.ROOT : AUTH_PATHS.SIGN_IN);
  }, [isLoggedIn]);
  useNavigator();
  return (
    <Routes>
      {/* @ts-ignore */}
      <Route exact path="/" element={<AuthPageLayout />}>
        {authRoutes
          .map(({ component, path }) => (
            <Route
              key={path}
              path={path}
              element={(
                <ProtectedComponent
                  element={component}
                  hasAccess={!isLoggedIn}
                  defaultPath={CLINIC_PATHS.ROOT}
                />
                  )}
            />
          ))}
      </Route>
      <Route
        path={CLINIC_PATHS.ROOT}
        element={(
          <ProtectedComponent
            element={<Clinic />}
            hasAccess={isLoggedIn}
            defaultPath={AUTH_PATHS.SIGN_IN}
          />
          )}
      >
        {appRoutes
          .map(({ component, path }) => (
            <Route
              key={path}
              path={path}
              element={(
                <ProtectedComponent
                  element={component}
                  hasAccess={isLoggedIn}
                  defaultPath={AUTH_PATHS.SIGN_IN}
                />
                    )}
            />
          ))}
      </Route>
    </Routes>
  );
};

export default MainRouter;
