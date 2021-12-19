import React, { ChangeEventHandler, FocusEventHandler, useState } from 'react';
import StyledInput from 'features/UserAuth/core/StyledInput';
import {
  InputError,
  InputIcon,
  InputWrapper,
  StyledIconEye,
} from './InputStyles';
import {
  IInput, SignInInputNames, SignUpInputNames, UserInputName,
} from '../../services/inputLists';

interface InputProps extends IInput<UserInputName | SignInInputNames | SignUpInputNames>{
  onChange: ChangeEventHandler,
  onBlur: FocusEventHandler,
  value?: string,
  touched?: boolean,
  error?: string,
}
const Input = function ({
  icon,
  placeholder,
  type = 'text',
  touched,
  error,
  ...props
}:InputProps) {
  const [isShow, setShow] = useState(false);
  const handleShow = () => {
    setShow(!isShow);
  };
  const showType = isShow ? 'text' : 'password';

  return (
    <InputWrapper>
      <InputIcon src={icon} />
      <StyledInput
        placeholder={placeholder}
        type={type === 'password' ? showType : type}
        {...props}
      />
      {touched && error ? <InputError>{error}</InputError> : null}
      {type === 'password' && <StyledIconEye onClick={handleShow} />}
    </InputWrapper>
  );
};

export default Input;
