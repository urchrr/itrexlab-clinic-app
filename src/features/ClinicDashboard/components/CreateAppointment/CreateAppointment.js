import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { selectDayAction, selectOccupationAction } from 'services/redux/doctors/actions';
import { addNewAppointmentAction } from 'services/redux/appointments/actions';
import { useNavigate } from 'react-router-dom';
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      occupation: '',
      doctorID: '',
      reason: '',
      note: '',
      day: '',
      date: '',
    },
    validationSchema: createAppointmentSchema,
    onSubmit: (values) => {
      dispatch(addNewAppointmentAction({ values, navigate: () => { navigate('/clinic/appointments'); } }));
    },
  });

  useEffect(() => {
    dispatch(selectOccupationAction(formik.values.occupation));
  }, [formik.values.occupation]);

  useEffect(() => {
    dispatch(selectDayAction(formik.values.day, formik.values.doctorID));
    formik.values.date = '';
  }, [formik.values.day]);

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
          <StyledSubmitButton disabled={formik.values.date === ''}>Submit</StyledSubmitButton>
        </StyledSubmitWrapper>
      </StyledForm>
    </>
  );
};

export default CreateAppointment;
