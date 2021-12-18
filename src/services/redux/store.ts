import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import user from 'services/redux/user';
import appointments from 'services/redux/appointments/reducers';
import doctors from 'services/redux/doctors/reducers';
import rootSaga from 'services/redux/rootSaga';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const saga = createSagaMiddleware();

const middleware = [saga];
const userPersistConfig = {
  key: 'user',
  storage,
};
const store = configureStore({
  reducer: {
    user: persistReducer(userPersistConfig, user),
    appointments,
    doctors,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware,
});
export default store;
saga.run(rootSaga);
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
