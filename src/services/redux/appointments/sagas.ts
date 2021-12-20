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
import notify from 'services/notify';
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
    } catch (error:any) {
      yield put(handleAppointmentsErrorsAction(error));
      notify.printToastErrorMsg(error);
    }
  }
  if (payload === 'Patient') {
    try {
      const { data: { appointments } } = yield call(getPatientsAllAppointments, requestParams);
      yield put(receiveAppointmentAction(appointments));
    } catch (error:any) {
      yield put(handleAppointmentsErrorsAction(error));
      notify.printToastErrorMsg(error);
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
  } catch (error:any) {
    notify.update(id, 'error', notify.errorToMsg(error));
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
