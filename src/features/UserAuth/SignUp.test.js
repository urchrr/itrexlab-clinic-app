import React from 'react';
import { Provider } from 'react-redux';
import store from 'services/redux/store';
import {
  render, screen,
} from '@testing-library/react';
import SignUp from 'features/UserAuth/SignUp';
import { BrowserRouter } from 'react-router-dom';

describe('App component', () => {
  test('it displays a sign up form', async () => {
    render(<BrowserRouter><Provider store={store}><SignUp /></Provider></BrowserRouter>);

    expect(screen.getByTestId('sign-up-form')).toBeDefined();
    expect(screen.getByTestId('form-footer')).toBeDefined();
  });
});
