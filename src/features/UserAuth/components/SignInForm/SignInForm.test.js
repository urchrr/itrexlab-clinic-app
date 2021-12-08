import React from 'react';
import {
  render, waitFor,
} from '@testing-library/react';
import SignInForm from 'features/UserAuth/components/SignInForm';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { signInInputList } from 'features/UserAuth/services/inputLists';
import * as useAuthorisation from 'features/UserAuth/hooks/useAuth';
import { BrowserRouter } from 'react-router-dom';

describe('SignIp form', () => {
  it('should take correct parameters', async () => {
    // eslint-disable-next-line no-console
    const loginMock = jest.fn((values) => console.log(values));
    jest.spyOn(useAuthorisation, 'useAuthorisation')
      .mockImplementation(() => ({ login: (values) => loginMock(values) }));

    const { getByTestId } = render(<BrowserRouter><SignInForm /></BrowserRouter>);
    signInInputList
      .map(({ name, testData }) => userEvent
        .type(getByTestId(`form-input-${name}`), testData));

    userEvent.click(getByTestId('form-submit-button'));
    const waitParams = signInInputList
      .reduce((init, { name, testData }) => {
        init[name] = testData;
        return init;
      }, {});
    await waitFor(() => {
      expect(loginMock).toHaveBeenCalledWith(waitParams);
    });
  });
});
