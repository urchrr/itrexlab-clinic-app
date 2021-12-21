import { fork } from 'redux-saga/effects';
import userSaga from 'services/redux/user/saga';
import appointmentSaga from 'services/redux/appointments/sagas';
import doctorsSaga from 'services/redux/doctors/saga';

export default function* rootSaga() {
  yield fork(userSaga);
  yield fork(appointmentSaga);
  yield fork(doctorsSaga);
  // code after fork-effect
}
