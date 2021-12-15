import React from 'react';
import { render } from '@testing-library/react';
import AppointmentCard from './AppointmentsCard';

describe('Appointment Card', () => {
  it('should render card', () => {
    const appointment = {
      visit_date: '2021-12-26T11:00:00.000Z',
      reason: 'Headache, pant',
      doctor: {
        first_name: 'Oleg',
        last_name: 'Dublyanin',
        photo: 'https://reactlabapi.herokuapp.com/src/public/users/images/default.jpg',
        specialization_name: 'surgeon',
      },
    };

    const { getByText } = render(<AppointmentCard data={appointment} />);

    expect(getByText(/Dublyanin/i)).toBeInTheDocument();
    expect(getByText(/Oleg/i)).toBeInTheDocument();
    expect(getByText(/surgeon/i)).toBeInTheDocument();
    expect(getByText(/Headache, pant/i)).toBeInTheDocument();
  });
});
