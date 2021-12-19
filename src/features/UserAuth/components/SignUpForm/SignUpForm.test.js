import React from 'react';
import {
  render, waitFor,
} from '@testing-library/react';
import SignUpForm from 'features/UserAuth/components/SignUpForm';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { signUpInputList } from 'features/UserAuth/services/inputLists';
import * as useAuthorisation from 'features/UserAuth/hooks/useAuth';
import { BrowserRouter } from 'react-router-dom';

describe('SignIp form', () => {
  it('should take correct parameters', async () => {
    // eslint-disable-next-line no-console
    const authMock = jest.fn((values) => console.log(values));
    jest.spyOn(useAuthorisation, 'useAuthorisation')
      .mockImplementation(() => ({ register: (values) => authMock(values) }));

    const { getByTestId } = render(
      <BrowserRouter><SignUpForm /></BrowserRouter>,
    );
    signUpInputList
      .map(({ name, testData }) => userEvent
        .type(getByTestId(`form-input-${name}`), testData));

    userEvent.click(getByTestId('form-submit-button'));
    const waitParams = signUpInputList
      .reduce((init, { name, testData }) => {
        init[name] = testData;
        return init;
      }, {});

    await waitFor(() => {
      expect(authMock).toHaveBeenCalledWith(waitParams);
    });
  });
});
