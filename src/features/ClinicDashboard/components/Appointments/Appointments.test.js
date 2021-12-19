import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import Appointments from 'features/ClinicDashboard/components/Appointments/Appointments';

const appointmentList = [
  {
    id: '131rrr10-5072-11ec-b7df-f1784d8070ff',
    visit_date: '2021-11-30T06:00:00.000Z',
    reason: 'reason',
    note: '',
    patient_id: '03360b10-5072-11ec-b7df-f1784d8070ff',
    doctor_id: '18a21d10-4df0-11ec-8ff7-0793810ddc12',
    status: 'waiting',
    doctor: {
      first_name: 'Gregory',
      last_name: 'House',
      photo: 'https://reactlabapi.herokuapp.com/src/public/users/images/default.jpg',
      id: '18a21d10-4df0-11ec-8ff7-0793810ddc12',
      specialization_name: 'ophthalmologist',
    },
  },

  {
    id: '131sss10-5072-11ec-b7df-f1784d8070ff',
    visit_date: '2021-11-30T06:00:00.000Z',
    reason: 'reason',
    note: '',
    patient_id: '03360b10-5072-11ec-b7df-f1784d8070ff',
    doctor_id: '18a21d10-4df0-11ec-8ff7-0793810ddc12',
    status: 'waiting',
    doctor: {
      first_name: 'Gregory',
      last_name: 'House',
      photo: 'https://reactlabapi.herokuapp.com/src/public/users/images/default.jpg',
      id: '18a21d10-4df0-11ec-8ff7-0793810ddc12',
      specialization_name: 'ophthalmologist',
    },
  },

  {
    id: '131aaa10-5072-11ec-b7df-f1784d8070ff',
    visit_date: '2021-11-30T06:00:00.000Z',
    reason: 'reason',
    note: '',
    patient_id: '03360b10-5072-11ec-b7df-f1784d8070ff',
    doctor_id: '18a21d10-4df0-11ec-8ff7-0793810ddc12',
    status: 'waiting',
    doctor: {
      first_name: 'Gregory',
      last_name: 'House',
      photo: 'https://reactlabapi.herokuapp.com/src/public/users/images/default.jpg',
      id: '18a21d10-4df0-11ec-8ff7-0793810ddc12',
      specialization_name: 'ophthalmologist',
    },
  },
];

describe('Appointment List', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  it('should render nothing when there is no appointments', async () => {
    const initialState = {
      appointments: {
        appointmentList: [],
      },
      appointment: { status: '' },
      user: { role_name: '' },
    };

    const store = mockStore(initialState);
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Appointments />
        </Provider>
      </BrowserRouter>,
    );
    expect(screen.getByTestId('cards-container')).toBeEmpty();
  });
  it('should render cards', async () => {
    const initialState = {
      appointments: {
        appointmentList,
      },
      appointment: { status: '' },
      user: { role_name: '' },
    };
    const store = mockStore(initialState);
    render(<BrowserRouter><Provider store={store}><Appointments /></Provider></BrowserRouter>);

    expect(screen.queryAllByTestId('card')).toHaveLength(3);
  });
});
