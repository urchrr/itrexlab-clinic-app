import React from 'react';
import {
  render, waitFor, screen,
} from '@testing-library/react';
import SignInForm from 'features/UserAuth/components/SignInForm';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import * as useAuthorisation from 'features/UserAuth/hooks/useAuth';
import { BrowserRouter } from 'react-router-dom';

describe('SignIp form', () => {
  it('should take correct parameters', async () => {
    // eslint-disable-next-line no-console
    const loginMock = jest.fn();
    jest.spyOn(useAuthorisation, 'useAuthorisation')
      .mockImplementation(() => ({ login: (values) => loginMock(values) }));

    render(<BrowserRouter><SignInForm /></BrowserRouter>);
    userEvent.type(screen.getByTestId('form-input-userName'), 'greg@email.com');
    userEvent.type(screen.getByTestId('form-input-password'), '123456');

    userEvent.click(screen.getByTestId('form-submit-button'));

    await waitFor(() => {
      expect(loginMock).toHaveBeenCalledWith({
        userName: 'greg@email.com',
        password: '123456',
      });
    });
  });
});
