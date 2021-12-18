import React from 'react';
import { freeTimeVisitSelector } from 'services/redux/doctors/selectors';
import TimeSlots from 'features/ClinicDashboard/components/CreateAppointment/TimeSlots/TimeSlots';
import { InputError } from 'features/UserAuth/components/Input/InputStyles';
import { StyledHeading, StyledNumber, StyledWrapper } from 'features/ClinicDashboard/components/CreateAppointment/styles';
import { useFormikContext } from 'formik';
import { useAppSelector } from 'services/redux/hooks/useAppSelector';
import { CreateAppointmentFormValues } from 'types/appointments';

const ThirdStep = function () {
  const {
    touched, errors, values,
  } = useFormikContext<CreateAppointmentFormValues>();
  const timeSlots = useAppSelector(freeTimeVisitSelector);
  return (
    <StyledWrapper blocked={values.day === ''}>
      <StyledHeading>
        <StyledNumber>3</StyledNumber>
        Select an available timeslot
      </StyledHeading>
      <TimeSlots
        dates={timeSlots}
        value={values.date}
      />
      {touched.date && errors.date ? (
        <InputError>{errors.date}</InputError>
      ) : null}
    </StyledWrapper>
  );
};

export default ThirdStep;
