import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import user from 'services/redux/user';
import { appointmentReducer } from 'services/redux/appointments/reducers';
import doctors from 'services/redux/doctors/reducers';
import rootSaga from 'services/redux/rootSaga';

const saga = createSagaMiddleware();

const middleware = [saga];

export default configureStore({
  reducer: {
    user,
    appointments: appointmentReducer,
    doctors,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware,
});

saga.run(rootSaga);
