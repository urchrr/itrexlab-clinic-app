import React, { useEffect } from 'react';
import { useFormik, Formik } from 'formik';
import { selectDayAction, selectOccupationAction } from 'services/redux/doctors/actions';
import { addNewAppointmentAction } from 'services/redux/appointments/actions';
import { ContentHeader, ContentHeaderTitle } from 'features/ClinicDashboard/core/ContentStyles';
import './Calendar/Calendar.css';
import { useAppDispatch } from 'services/redux/hooks/useAppDispatch';
import { CreateAppointmentFormValues, CreateAppointmentValues } from 'types/appointments';
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
  const formik = useFormik({
    initialValues,
    validationSchema: createAppointmentSchema,
    onSubmit: ({
      date, reason, note, doctorID,
    }:CreateAppointmentValues) => {
      dispatch(addNewAppointmentAction({
        date, reason, note, doctorID,
      }));
    },
  });

  useEffect(() => {
    dispatch(selectOccupationAction(formik.values.occupation));
  }, [formik.values.occupation]);

  useEffect(() => {
    dispatch(selectDayAction({ date: formik.values.day, doctorID: formik.values.doctorID }));
    formik.values.date = '';
  }, [formik.values.day]);

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
              <StyledSubmitButton disabled={isValid}>Submit</StyledSubmitButton>
            </StyledSubmitWrapper>
          </StyledForm>
        )}

      </Formik>
    </>
  );
};

export default CreateAppointment;
