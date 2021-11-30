import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
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
  const {
    firstName, secondName, role, avatar,
  } = useSelector(userDataSelector);
  const navigate = useNavigate();
  const routes = {
    Doctor: ['patients', 'resolutions'],
    Patient: ['profile', 'appointments', 'resolutions'],
    admin: [],
  };

  const [activePath, setActivePath] = useState(routes[role][0]);

  const handleNavigate = (path) => {
    setActivePath(path);
    navigate(path);
  };

  return (
    <Page>
      <Header user={{
        firstName, secondName, role, avatar,
      }}
      />
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
