import * as Yup from 'yup';
import {
    minNameLength, maxNameLength, minPassLength
}
 from "./constants";

export const signInSchema = Yup.object().shape(({
    email: Yup.string()
        .email('Invalid email')
        .required('This field is required'),
    password: Yup.string()
        .min(minPassLength, 'Password must contain at least 4 symbols')
        .required('This field is required'),
}));

export const signUpSchema = Yup.object().shape(({
    firstName: Yup.string()
        .min(minNameLength, 'Name must contain at least 2 symbols')
        .max(maxNameLength, 'Maximum characters exceeded')
        .required('This field is required'),
    lastName: Yup.string()
        .min(minNameLength, 'Name must contain at least 2 symbols')
        .max(maxNameLength, 'Maximum characters exceeded')
        .required('This field is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('This field is required'),
    password: Yup.string()
        .min(minPassLength, 'Password must contain at least 4 symbols')
        .required('This field is required'),
    passwordConfirm: Yup.string()
        .min(minPassLength, 'Password must contain at least 4 symbols')
        .required('This field is required'),
}));

export const restorePassSchema = Yup.object().shape(({
    email: Yup.string()
        .email('Invalid email')
        .required('This field is required'),
}));
