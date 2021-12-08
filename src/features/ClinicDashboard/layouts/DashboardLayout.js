import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { userDataSelector } from 'services/redux/user/selectors';
import { useSelector } from 'react-redux';
import Header from '../components/PageHeader/PageHeader';
import NavigationButton from '../components/NavigationButton';
import {
  Page,
  PageNavigationArea,
  PageContent,
} from '../core/PageContentStyles';

const ClinicDashboard = function () {
  const user = useSelector(userDataSelector);
  const { role } = user;
  const navigate = useNavigate();
  const routes = {
    Doctor: ['patients', 'resolutions'],
    Patient: ['profile', 'appointments', 'resolutions'],
    admin: [],
  };
  const currentPath = useLocation().pathname.replace('/clinic/', '');
  const [activePath, setActivePath] = useState(currentPath === '' ? routes[role][0] : currentPath);

  const handleNavigate = (path) => {
    setActivePath(path);
    navigate(path);
  };

  return (
    <Page>
      <Header user={user} />
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
