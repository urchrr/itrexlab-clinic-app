import React from 'react';
import {
  StyledHeading, StyledInput, StyledNumber, StyledWrapper,
} from './styles';
import InputWrapper from './StyledInputWrapper';
import Selector from './Selector';
import listOfSelectors from './listOfSelectors';
import listOfInputs from './listOfInputs';

const FirstStep = function ({ stateProvider }) {
  return (
    <StyledWrapper>
      <StyledHeading>
        <StyledNumber>1</StyledNumber>
        Select a doctor and define the reason of your visit
      </StyledHeading>
      {listOfSelectors.map(({ label, name, options }) => (
        <InputWrapper
          label={label}
          touched={stateProvider.touched[name]}
          error={stateProvider.errors[name]}
        >
          <Selector
            name={name}
            formik={stateProvider}
            options={options}
          />
        </InputWrapper>
      ))}
      {listOfInputs.map(({ label, name, placeholder }) => (
        <InputWrapper
          label={label}
          touched={stateProvider.touched[name]}
          error={stateProvider.errors[name]}
        >
          <StyledInput
            name={name}
            placeholder={placeholder}
            onChange={stateProvider.handleChange}
            value={stateProvider.values[name]}
            onBlur={() => stateProvider.setFieldTouched(name, true)}
          />
        </InputWrapper>
      ))}
    </StyledWrapper>
  );
};

export default FirstStep;
