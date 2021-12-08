import React from 'react';
import { useSelector } from 'react-redux';

import listOfSelectors from 'features/ClinicDashboard/components/CreateAppointment/listOfSelectors';
import {
  StyledHeading, StyledInput, StyledNumber, StyledWrapper,
} from './styles';
import InputWrapper from './StyledInputWrapper';
import Selector from './Selector';
import listOfInputs from './listOfInputs';

const FirstStep = function ({ stateProvider }) {
  return (
    <StyledWrapper>
      <StyledHeading>
        <StyledNumber>1</StyledNumber>
        Select a doctor and define the reason of your visit
      </StyledHeading>
      {listOfSelectors.map(({ label, name, optionsSelector }) => {
        const options = useSelector(optionsSelector);
        return ((
          <InputWrapper
            key={name}
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
        ));
      })}
      {listOfInputs.map(({ label, name, placeholder }) => (
        <InputWrapper
          key={name}
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
