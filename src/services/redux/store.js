import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userRegistration from 'services/redux/registration/reducers';
import userAuth from 'services/redux/authorization';
import loginSaga from 'services/redux/authorization/saga';
import registrationSaga from 'services/redux/registration/saga';
import { appointmentReducer } from 'services/redux/appointments/reducers';
import receiveAppointmentsSaga from 'services/redux/appointments/sagas';

const saga = createSagaMiddleware();

const middleware = [saga];

export default configureStore({
  reducer: {
    userAuth,
    userRegistration,
    appointments: appointmentReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware,
});

saga.run(loginSaga);
saga.run(registrationSaga);
saga.run(receiveAppointmentsSaga);
