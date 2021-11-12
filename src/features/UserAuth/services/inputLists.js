import iconPerson from '../images/icon-person.svg'
import iconEmail from '../images/icon-mail.svg'
import iconLock from '../images/icon-lock.svg'
import iconAccept from '../images/icon-accept.svg'

export const signUpInputList = [
    {
        icon: iconPerson,
        placeholder: 'First Name',
        name: 'firstName',
    },
    {
        icon: iconPerson,
        placeholder: 'Second Name',
        name: 'lastName',
    },
    {
        icon: iconEmail,
        type: 'email',
        placeholder: 'Email',
        name: 'email',
    },
    {
        icon: iconLock,
        type: 'password',
        placeholder: 'Password',
        name: 'password',
    },
    {
        icon: iconAccept,
        type: 'password',
        placeholder: 'Confirm password',
        name: 'passwordConfirm',
    },
]

export const signInInputList = [
    {
        icon: iconEmail,
        placeholder: 'Email',
        type: 'email',
        name: 'email',
    },
    {
        icon: iconLock,
        placeholder: 'Password',
        type: 'password',
        name: 'password',
    },
]

export const restorePasswordInputList = [
    {
        icon: iconEmail,
        placeholder: 'Email',
        name: 'email',
    },
]
