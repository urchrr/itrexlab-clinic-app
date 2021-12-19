import React from 'react';
import { Provider } from 'react-redux';
import store from 'services/redux/store';
import {
  render, screen,
} from '@testing-library/react';
import SignIn from 'features/UserAuth/SignIn';
import { BrowserRouter } from 'react-router-dom';

describe('App component', () => {
  it('it displays a sign in form', () => {
    render(<BrowserRouter><Provider store={store}><SignIn /></Provider></BrowserRouter>);

    expect(screen.getByTestId('sign-in-form')).toBeInTheDocument();
    expect(screen.getByTestId('form-footer')).toBeInTheDocument();
  });
});
