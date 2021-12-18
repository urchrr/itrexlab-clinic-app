import React from 'react';
import Selector from 'features/ClinicDashboard/components/CreateAppointment/Selector';
import { useFormikContext } from 'formik';
import { CreateAppointmentFormValues } from 'types/appointments';
import {
  doctorsBySpecSelector,
  specializationsSelector,
} from 'services/redux/doctors/selectors';
import { useAppSelector } from 'services/redux/hooks/useAppSelector';
import {
  StyledHeading, StyledInput, StyledNumber, StyledWrapper,
} from './styles';
import InputWrapper from './StyledInputWrapper';

const FirstStep = function () {
  const {
    touched, errors, handleChange, values, setFieldTouched,
  } = useFormikContext<CreateAppointmentFormValues>();
  const specOptions = useAppSelector(specializationsSelector);
  const doctorsOption = useAppSelector(doctorsBySpecSelector);
  return (
    <StyledWrapper>
      <StyledHeading>
        <StyledNumber>1</StyledNumber>
        Select a doctor and define the reason of your visit
      </StyledHeading>
      <InputWrapper
        label="Occupation *"
        touched={touched.occupation}
        error={errors.occupation}
      >
        <Selector
          name="occupation"
          options={specOptions}
        />
      </InputWrapper>
      <InputWrapper
        label="Doctor`s name *"
        touched={touched.doctorID}
        error={errors.doctorID}
      >
        <Selector
          name="doctorID"
          options={doctorsOption}
        />
      </InputWrapper>

      <InputWrapper
        label="Reason for the visit *"
        touched={touched.reason}
        error={errors.reason}
      >
        <StyledInput
          name="occupation"
          placeholder="Reasons..."
          onChange={handleChange}
          value={values.reason}
          onBlur={() => setFieldTouched('reason', true)}
        />
      </InputWrapper>
      <InputWrapper
        label="Notes"
        touched={touched.note}
        error={errors.note}
      >
        <StyledInput
          name="note"
          placeholder="Notes..."
          onChange={handleChange}
          value={values.note}
          onBlur={() => setFieldTouched('note', true)}
        />
      </InputWrapper>
    </StyledWrapper>
  );
};

export default FirstStep;
