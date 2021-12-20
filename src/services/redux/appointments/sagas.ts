import {
  call, fork, put, takeLatest,
} from 'redux-saga/effects';
import {
  createNewAppointment,
  getDoctorsAllAppointments,
  getPatientsAllAppointments,
} from 'services/api/appointments/requests';
import {
  addNewAppointmentAction,
  handleAppointmentsErrorsAction,
  receiveAppointmentAction,
  receiveAppointmentsAction,
} from 'services/redux/appointments/actions';
import notify, { NotifyError } from 'services/notify';
import { ClinicPaths } from 'routes/constants';
import { setNavigationPathAction } from 'services/redux/user/actions';
import { PayloadAction } from '@reduxjs/toolkit';
import { AppointmentRequestParams, CreateAppointmentValues } from 'types/appointments';
import { UserRoles } from 'types/userDataTypes';

const requestParams : AppointmentRequestParams = {
  offset: 0,
  limit: 100,
};

function* workerReceiveAppointments({ payload }: PayloadAction<UserRoles>) {
  if (payload === 'Doctor') {
    try {
      const { data: { appointments } } = yield call(getDoctorsAllAppointments, requestParams);
      yield put(receiveAppointmentAction(appointments));
    } catch (error) {
      const message = notify.errorToMsg(error as NotifyError);
      yield put(handleAppointmentsErrorsAction(error));
      notify.printToastErrorMsg(message);
    }
  }
  if (payload === 'Patient') {
    try {
      const { data: { appointments } } = yield call(getPatientsAllAppointments, requestParams);
      yield put(receiveAppointmentAction(appointments));
    } catch (error) {
      const message = notify.errorToMsg(error as NotifyError);
      yield put(handleAppointmentsErrorsAction(error));
      notify.printToastErrorMsg(message);
    }
  }
}
function* workerAddAppointment({ payload } :
PayloadAction<CreateAppointmentValues>) {
  const id = notify.initial('Please wait...');
  try {
    notify.update(id, 'info', 'Saving appointment...');
    yield call(createNewAppointment, payload);
    notify.update(id, 'success', 'Saved!');
    yield put(setNavigationPathAction(ClinicPaths.appointments));
    notify.closeAll();
  } catch (error) {
    const message = notify.errorToMsg(error as NotifyError);
    notify.update(id, 'error', message);
    yield put(handleAppointmentsErrorsAction(error));
  }
}

function* watcherAppointment() {
  yield takeLatest(receiveAppointmentsAction, workerReceiveAppointments);
  yield takeLatest(addNewAppointmentAction, workerAddAppointment);
}

function* appointmentSaga() {
  yield fork(watcherAppointment);
}
export default appointmentSaga;
