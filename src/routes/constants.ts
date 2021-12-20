export enum AuthPaths {
  signIn = '/sign-in',
  signUp = '/sign-up',
  restorePassword = '/restore-password',
}
const appPath = 'clinic';
export const ClinicPaths = {
  root: appPath,
  patients: 'clinic/patients',
  resolutions: 'clinic/resolutions',
  appointments: `${appPath}/appointments`,
  createAppointment: 'clinic/create-appointment',
  profile: 'clinic/profile',
};
