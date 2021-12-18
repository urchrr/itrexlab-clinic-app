import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { userRoleSelector } from 'services/redux/user/selectors';
import Header from '../components/PageHeader/PageHeader';
import NavigationButton from '../components/NavigationButton';
import {
  Page,
  PageNavigationArea,
  PageContent,
} from '../core/PageContentStyles';
import { useAppSelector } from '../../../services/redux/hooks/useAppSelector';

const ClinicDashboard = function () {
  const role = useAppSelector(userRoleSelector);
  const navigate = useNavigate();
  const routes = {
    Doctor: ['patients', 'resolutions'],
    Patient: ['profile', 'appointments', 'resolutions'],
    admin: [],
    unknown: [],
  };
  const currentPath = useLocation().pathname.replace('/clinic/', '');
  const [activePath, setActivePath] = useState(currentPath === '' ? routes[role][0] : currentPath);

  const handleNavigate = (path:string) => {
    setActivePath(path);
    navigate(path);
  };

  return (
    <Page>
      <Header />
      <PageContent>
        <PageNavigationArea>
          {routes[role].map((path) => (
            <NavigationButton
              isActive={activePath === path}
              key={path}
              path={path}
              action={handleNavigate}
            />
          ))}
        </PageNavigationArea>
        <Outlet />
      </PageContent>
    </Page>
  );
};

export default ClinicDashboard;
