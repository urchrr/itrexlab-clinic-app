import { fork } from 'redux-saga/effects';
import loginSaga from 'services/redux/authorization/saga';
import registrationSaga from 'services/redux/registration/saga';
import appointmentSaga from 'services/redux/appointments/sagas';
import doctorsSaga from 'services/redux/doctors/saga';

export default function* rootSaga() {
  yield fork(loginSaga);
  yield fork(registrationSaga);
  yield fork(appointmentSaga);
  yield fork(doctorsSaga);
  // code after fork-effect
}
