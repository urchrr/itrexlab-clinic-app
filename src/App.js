import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Clinic from 'features/ClinicDashboard/layouts/DashboardLayout';
import AuthPageLayout from 'features/UserAuth/layouts/AuthPageLayout';
import SignUp from 'features/UserAuth/SignUp';
import SignIn from 'features/UserAuth/SignIn';
import RestorePassForm from 'features/UserAuth/components/RestorePassForm';
import Patients from 'features/ClinicDashboard/components/Patients';
import Appointments from 'features/ClinicDashboard/components/Appointments/Appointments';
import CreateAppointment from 'features/ClinicDashboard/components/CreateAppointment/CreateAppointment';
import { isLoggedInSelector } from 'services/redux/user/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useShadowAuth } from 'services/hooks/useShadowAuth';

const RequireAuth = function ({ children }) {
  const isLoggedIn = useSelector(isLoggedInSelector);
  if (!isLoggedIn) {
    return <Navigate to="/sign-in" />;
  }
  return children;
};

const App = function () {
  useShadowAuth();
  return (
    <>
      <Routes>
        <Route element={<AuthPageLayout />}>
          <Route exact path="/" element={<SignUp />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/restore-password" element={<RestorePassForm />} />
        </Route>
        <Route
          path="clinic"
          element={(
            <RequireAuth>
              <Clinic />
            </RequireAuth>
                  )}
        >
          <Route path="patients" element={<Patients />} />
          <Route path="resolutions" />
          <Route path="profile" />
          <Route path="appointments" element={<Appointments />} />
          <Route path="resolutions" />
          <Route
            path="create-appointment"
            element={<CreateAppointment />}
          />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

RequireAuth.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default App;
