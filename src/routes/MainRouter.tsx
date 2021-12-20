import {
  Route, Routes, useNavigate,
} from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AuthPageLayout from '../features/UserAuth/layouts/AuthPageLayout';
import Clinic from '../features/ClinicDashboard/layouts/DashboardLayout';
import { isLoggedInSelector } from '../services/redux/user/selectors';
import { AuthPaths, ClinicPaths } from './constants';
import ProtectedComponent from './ProtectedComponent';
import { appRoutes, authRoutes } from './routes';
import useNavigator from '../services/hooks/useNavigator';

const MainRouter = function () {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(isLoggedIn ? ClinicPaths.root : AuthPaths.signIn);
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
                  defaultPath={ClinicPaths.root}
                />
                  )}
            />
          ))}
      </Route>
      <Route
        path={ClinicPaths.root}
        element={(
          <ProtectedComponent
            element={<Clinic />}
            hasAccess={isLoggedIn}
            defaultPath={AuthPaths.signIn}
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
                  defaultPath={AuthPaths.signIn}
                />
                    )}
            />
          ))}
      </Route>
    </Routes>
  );
};

export default MainRouter;
