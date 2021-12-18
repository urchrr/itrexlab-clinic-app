import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useShadowAuth } from 'services/hooks/useShadowAuth';
import MainRouter from './routes/MainRouter';

const App = function () {
  useShadowAuth();
  return (
    <>
      <MainRouter />
      <ToastContainer />
    </>
  );
};

export default App;
