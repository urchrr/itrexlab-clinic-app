export const authPaths = {
  signIn: '/sign-in',
  signUp: '/sign-up',
  restorePassword: '/restore-password',
};

const appPath = '/clinic';

export const clinicPaths = {
  root: appPath,
  patients: `${appPath}/patients`,
  resolutions: `${appPath}/resolutions`,
  appointments: `${appPath}/appointments`,
  createAppointment: `${appPath}/create-appointment`,
  profile: `${appPath}/profile`,
};
