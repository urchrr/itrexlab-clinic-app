import * as Yup from 'yup';
import {
  minNameLength,
  maxNameLength,
  minPassLength,
} from 'services/constants';

/* function equalTo(ref: { path: any; }, msg: any) {
  return Yup.mixed().test({
    name: 'equalTo',
    exclusive: false,
    // eslint-disable-next-line no-template-curly-in-string
    message: msg || '${path} must be the same as ${reference}',
    params: {
      reference: ref.path,
    },
    test(value) {
      return value === this.resolve(ref);
    },
  });
} */

// Yup.addMethod(Yup.string, 'equalTo', equalTo);

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('This field is required'),
  password: Yup.string()
    .min(minPassLength, 'Password must contain at least 4 symbols')
    .required('This field is required'),
});

export const signUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(
      minNameLength,
      `Name must contain at least ${minNameLength} symbols`,
    )
    .max(maxNameLength, 'Maximum characters exceeded')
    .required('This field is required'),
  lastName: Yup.string()
    .min(
      minNameLength,
      `Name must contain at least ${minNameLength} symbols`,
    )
    .max(maxNameLength, 'Maximum characters exceeded')
    .required('This field is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('This field is required'),
  password: Yup.string()
    .min(
      minPassLength,
      `Password must contain at least ${minPassLength} symbols`,
    )
    .required('This field is required'),
  passwordConfirm: Yup.string()
    .min(
      minPassLength,
      `Password must contain at least ${minPassLength} symbols`,
    )
    // .equalTo(Yup.ref('password'), 'Passwords must match')
    .required('This field is required'),
});

export const restorePassSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('This field is required'),
});
