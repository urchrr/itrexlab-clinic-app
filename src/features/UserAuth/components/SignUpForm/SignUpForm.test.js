import React from 'react';
import {
  render, waitFor,
} from '@testing-library/react';
import SignUpForm from 'features/UserAuth/components/SignUpForm';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import * as useAuthorisation from 'features/UserAuth/hooks/useAuth';
import { BrowserRouter } from 'react-router-dom';

describe('SignIn form', () => {
  it('should take correct parameters', async () => {
    // eslint-disable-next-line no-console
    const authMock = jest.fn();
    jest.spyOn(useAuthorisation, 'useAuthorisation')
      .mockImplementation(() => ({ register: (values) => authMock(values) }));

    const { getByTestId } = render(
      <BrowserRouter><SignUpForm /></BrowserRouter>,
    );
    userEvent.type(getByTestId('form-input-firstName'), 'Greg');
    userEvent.type(getByTestId('form-input-lastName'), 'NotHouse');
    userEvent.type(getByTestId('form-input-userName'), 'greg@email.com');
    userEvent.type(getByTestId('form-input-password'), '123456');
    userEvent.type(getByTestId('form-input-passwordConfirm'), '123456');

    userEvent.click(getByTestId('form-submit-button'));

    await waitFor(() => {
      expect(authMock).toHaveBeenCalledWith(
        {
          firstName: 'Greg',
          lastName: 'NotHouse',
          userName: 'greg@email.com',
          password: '123456',
          passwordConfirm: '123456',
        },
      );
    });
  });
});
