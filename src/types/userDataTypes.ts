export type SignUpFormValues = {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  passwordConfirm: string;
};

export type SignInFormValues = {
  userName: string;
  password: string;
};

export type Tokens = {
  accessToken: string,
  refreshToken?: string,
};

export type UserRoles = 'Doctor' | 'Patient' | 'unknown';

export enum UserStatus {
  'online',
  'offline',
}
