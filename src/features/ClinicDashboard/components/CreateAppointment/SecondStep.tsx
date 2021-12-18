import React from 'react';
import { format } from 'date-fns';
import TimeCalendar from 'features/ClinicDashboard/components/CreateAppointment/Calendar/Calendar';
import { InputError } from 'features/UserAuth/components/Input/InputStyles';
import { useFormikContext } from 'formik';
import { CreateAppointmentFormValues } from 'types/appointments';
import { StyledHeading, StyledNumber, StyledWrapper } from './styles';

const SecondStep = function () {
  const {
    values: {
      occupation, reason, doctor,
    },
    errors,
    touched,
    setFieldValue,
  } = useFormikContext<CreateAppointmentFormValues>();
  const date = (value:number | Date) => format(value, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

  return (
    <StyledWrapper>
      <StyledHeading>
        <StyledNumber>2</StyledNumber>
        Choose a day for an appointment
      </StyledHeading>
      <TimeCalendar
        blocked={!(doctor !== '' && occupation !== '' && reason !== '')}
        onClickDay={(value:number | Date) => setFieldValue('day', date(value))}
      />
      {touched.day && errors.day ? (
        <InputError>{errors.day}</InputError>
      ) : null}
    </StyledWrapper>
  );
};

export default SecondStep;
