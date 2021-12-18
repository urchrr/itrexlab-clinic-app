import React from 'react';
import { Formik } from 'formik';

import { addNewAppointmentAction } from 'services/redux/appointments/actions';
import { ContentHeader, ContentHeaderTitle } from 'features/ClinicDashboard/core/ContentStyles';
import './Calendar/Calendar.css';
import { CreateAppointmentFormValues } from 'types/appointments';
import {
  StyledForm,
  StyledSubmitWrapper,
  StyledSubmitButton,
} from './styles';
import createAppointmentSchema from './validationSchema';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import { useAppDispatch } from '../../../../services/redux/hooks/useAppDispatch';

const CreateAppointment = function () {
  const dispatch = useAppDispatch();
  const initialValues : CreateAppointmentFormValues = {
    occupation: '',
    doctor: '',
    doctorID: '',
    reason: '',
    note: '',
    day: '',
    date: '',
  };

  return (
    <>
      <ContentHeader>
        <ContentHeaderTitle>Make an appointment</ContentHeaderTitle>
      </ContentHeader>
      <Formik
        initialValues={initialValues}
        validationSchema={createAppointmentSchema}
        validateOnBlur={false}
        onSubmit={(values) => {
          dispatch(addNewAppointmentAction(values));
        }}
      >
        {({ isValid }) => (
          <StyledForm>
            <FirstStep />
            <SecondStep />
            <ThirdStep />
            <StyledSubmitWrapper>
              <StyledSubmitButton disabled={!isValid}>Submit</StyledSubmitButton>
            </StyledSubmitWrapper>
          </StyledForm>
        )}

      </Formik>
    </>
  );
};

export default CreateAppointment;
