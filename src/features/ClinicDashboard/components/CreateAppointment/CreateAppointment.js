import React from 'react';
import { useFormik } from 'formik';
import { ContentHeader, ContentHeaderTitle } from '../../core/ContentStyles';
import './Calendar/Calendar.css';
import {
  StyledForm,
  StyledSubmitWrapper,
  StyledSubmitButton,
} from './styles';
import createAppointmentSchema from './validationSchema';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

const CreateAppointment = function () {
  const formik = useFormik({
    initialValues: {
      occupation: '',
      doctor: '',
      reason: '',
      note: '',
      day: new Date(),
      time: '',
    },
    validationSchema: createAppointmentSchema,
    onSubmit: (values) => {
      // eslint-disable-next-line no-console
      console.log(values);
      alert(JSON.stringify(values));
    },
  });

  return (
    <>
      <ContentHeader>
        <ContentHeaderTitle>Make an appointment</ContentHeaderTitle>
      </ContentHeader>
      <StyledForm onSubmit={formik.handleSubmit}>
        <FirstStep stateProvider={formik} />
        <SecondStep stateProvider={formik} />
        <ThirdStep stateProvider={formik} />
        <StyledSubmitWrapper>
          <StyledSubmitButton>Submit</StyledSubmitButton>
        </StyledSubmitWrapper>
      </StyledForm>
    </>
  );
};

export default CreateAppointment;
