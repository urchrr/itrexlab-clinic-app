import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import ClinicDashboardLayout from '../layouts/DashboardLayout';
import NavigationButton from './NavigationButton';
import Patients from './Patients';
import * as constants from '../services/constants';
import getUser from '../services/getUser';
import getCards from '../services/getCards';

const Content = styled.section`
  background-color: ${constants.formBackgroundColor};
  border-radius: 24px 24px 0 0;
  height: calc(100% - 72px);
  padding: 40px 16px;
  @media only screen and (min-width: 560px) {
    padding: 40px 16px 40px 48px;
    border-radius: 16px;
  }
`;

const NavigationArea = styled.div`
  display: flex;
  margin-bottom: 40px;
  margin-right: 8px;
  @media only screen and (min-width: 560px) {
    padding-right: 32px;
  }
  @media only screen and (min-width: 1480px) {
    padding-right: 44px;
  }
`;

const ClinicDashboard = () => {
  const cards = getCards();
  const user = getUser();
  const routes = {
    patients: 'patients',
    resolutions: 'resolutions',
  };
  const firstRoute = Object.values(routes)[0];
  const [activePath, setActivePath] = useState(firstRoute);

  const handleNavigate = (name) => {
    setActivePath(name);
  };
  return (
        <ClinicDashboardLayout user={user}>
            <Content>
                <NavigationArea>
                    <NavigationButton title={'Patients'}
                                      isActive={activePath === 'patients'}
                                      name={'patients'}
                                      path={routes.patients}
                                      action={handleNavigate}
                    />
                    <NavigationButton title={'Resolutions'}
                                      isActive={activePath === 'resolutions'}
                                      path={routes.resolutions}
                                      name={'resolutions'}
                                      action={handleNavigate}
                    />
                </NavigationArea>
                <Routes>
                    <Route path={''} element={<Navigate to={firstRoute}/>}/>
                    <Route path={routes.patients} element={<Patients cards={cards}/>}/>
                    <Route path={routes.resolutions} element={<></>}/>
                </Routes>
            </Content>
        </ClinicDashboardLayout>
  );
};

export default ClinicDashboard;
