export const AUTH_PATHS = {
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  RESTORE_PASSWORD: '/restore-password',
};

const APP_PATH = '/clinic';

export const CLINIC_PATHS = {
  ROOT: APP_PATH,
  PATIENTS: `${APP_PATH}/patients`,
  RESOLUTIONS: `${APP_PATH}/resolutions`,
  APPOINTMENTS: `${APP_PATH}/appointments`,
  CREATE_APPOINTMENT: `${APP_PATH}/create-appointment`,
  PROFILE: `${APP_PATH}/profile`,
};
