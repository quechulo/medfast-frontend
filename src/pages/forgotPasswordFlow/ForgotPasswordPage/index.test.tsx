/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'src/App';
import { renderWithProviders } from 'src/test/testUtils';

const regex = {
  forgotPassword: /Forgot your password?/i,
  emailAddress: /Email Address/i,
  sendCode: /Send code/i,
  loading: /Loading.../i,
  emailError: /Please enter valid email address/i,
  CheckYourEmail: /Check your email/i,
};

describe('ForgotPasswordPage', () => {
  test('renders without crashing', () => {
    // render the component
    renderWithProviders(<App />, { route: '/forgot-password' });

    // check if "Forgot your password?" text is in the document
    const forgotPasswordText = screen.getByText(regex.forgotPassword);
    expect(forgotPasswordText).toBeInTheDocument();

    // check if input field is in the document with Email Address label
    const emailInput = screen.getByRole('textbox', {
      name: regex.emailAddress,
    });
    expect(emailInput).toBeInTheDocument();

    // check if submit button is in the document
    const submitButton = screen.getByRole('button', { name: regex.sendCode });
    expect(submitButton).toBeInTheDocument();
  });

  test('successfully submits the form with valid email', async () => {
    // render the component
    const { store } = renderWithProviders(<App />, {
      route: '/forgot-password',
    });

    // fill out the email input
    const emailInput = screen.getByRole('textbox', {
      name: regex.emailAddress,
    });
    act(() => {
      userEvent.type(emailInput, 'test123@gmail.com');
    });

    expect(emailInput).toHaveValue('test123@gmail.com');

    // submit the form
    const submitButton = screen.getByRole('button', { name: regex.sendCode });
    act(() => {
      userEvent.click(submitButton);
    });

    // // check if isLoading is in the document
    const loading = await screen.findByText(regex.loading);
    expect(loading).toBeInTheDocument();

    // check if check your email text is in the document
    const checkYourEmailText = await screen.findByText(regex.CheckYourEmail);
    expect(checkYourEmailText).toBeInTheDocument();

    // check if email was saved to the store
    const { auth } = store.getState();
    expect(auth.forgotPasswordInfo.email).toEqual('test123@gmail.com');
  });

  test('does NOT submit the form with invalid input', async () => {
    // render the component
    const { store } = renderWithProviders(<App />, {
      route: '/forgot-password',
    });

    // fill out the email input
    const emailInput = screen.getByRole('textbox', {
      name: regex.emailAddress,
    });

    act(() => {
      userEvent.type(emailInput, 'test123');
    });

    await waitFor(() => expect(emailInput).toHaveValue('test123'));

    // submit the form
    const submitButton = screen.getByRole('button', { name: regex.sendCode });
    act(() => {
      userEvent.click(submitButton);
    });

    // check if isLoading is NOT in the document
    const loading = screen.queryByText(regex.loading);
    expect(loading).not.toBeInTheDocument();

    // check if error message is in the document
    const errorMessage = await screen.findByText(regex.emailError);
    await waitFor(() => expect(errorMessage).toBeInTheDocument());

    // check if "Check your email" is NOT in the document
    const checkYourEmailText = screen.queryByText(regex.CheckYourEmail);
    expect(checkYourEmailText).not.toBeInTheDocument();

    // check if email was NOT saved to the store
    const { auth } = store.getState();
    expect(auth.forgotPasswordInfo.email).toEqual('');
  });
});
