/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { act, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HttpResponse, http } from 'msw';
import { renderWithProviders } from 'src/test/testUtils';
import App from 'src/App';
import { isTokenValid } from 'src/utils/resetPasswordToken';
import { registrationFormSchema5Messages } from 'src/schemas/registrationFormSchema';
import { server } from 'src/test/server';
import { baseUrl } from 'src/test/server/handlers';

// Mock isTokenValid function
jest.mock('src/utils/resetPasswordToken', () => ({
  isTokenValid: jest.fn(),
}));

const regex = {
  descriptionMainText: /Set new password/i,
  newPasswordInputPlaceholder: /New password/i,
  repeatPasswordInputPlaceholder: /Repeat password/i,
  buttonText: /Set and login/i,
  loading: /Loading.../i,
  successPageText: /Password reset/i,
  errorPageText: /Password reset error/i,
  forgotPasswordPageText: /Forgot your password?/i,
  tokenExpiredError: /Sorry, your session is over/i,
};

const {
  password: passwordMessages,
  passwordRepeated: passwordRepeatedMessages,
} = registrationFormSchema5Messages;

const fillOutTheForm = async (newPassword: string, repeatPassword: string) => {
  // fill out the new password input
  const newPasswordInput = screen.getByPlaceholderText(
    regex.newPasswordInputPlaceholder
  );
  act(() => {
    userEvent.type(newPasswordInput, newPassword);
  });
  expect(newPasswordInput).toHaveValue(newPassword);

  // fill out the repeat password input
  const repeatPasswordInput = screen.getByPlaceholderText(
    regex.repeatPasswordInputPlaceholder
  );
  act(() => {
    userEvent.type(repeatPasswordInput, repeatPassword);
  });
  expect(repeatPasswordInput).toHaveValue(repeatPassword);
};

const submitForm = async () => {
  const submitButton = screen.getByRole('button', {
    name: regex.buttonText,
  });

  act(() => {
    userEvent.click(submitButton);
  });
};

describe('SetNewPasswordPage', () => {
  afterEach(() => {
    // Clear mocks before each test
    jest.clearAllMocks();
    cleanup();
  });

  test('renders without crashing', async () => {
    // Override isTokenValid function
    (isTokenValid as jest.Mock).mockReturnValue(true);

    renderWithProviders(<App />, {
      route: '/forgot-password/123/123',
    });

    const setNewPasswordText = screen.getByText(regex.descriptionMainText);
    expect(setNewPasswordText).toBeInTheDocument();

    const newPasswordInput = screen.getByPlaceholderText(
      regex.newPasswordInputPlaceholder
    );
    expect(newPasswordInput).toBeInTheDocument();

    const repeatPasswordInput = screen.getByPlaceholderText(
      regex.repeatPasswordInputPlaceholder
    );
    expect(repeatPasswordInput).toBeInTheDocument();

    const submitButton = screen.getByRole('button', {
      name: regex.buttonText,
    });
    expect(submitButton).toBeInTheDocument();
  });

  test('redirects to /forgot-password when token is invalid', async () => {
    // Override isTokenValid function
    (isTokenValid as jest.Mock).mockReturnValue(false);

    renderWithProviders(<App />, {
      route: '/forgot-password/123/123',
    });

    const forgotPasswordText = await screen.findByText(
      regex.forgotPasswordPageText
    );
    expect(forgotPasswordText).toBeInTheDocument();
  });

  test('submits the form with valid data and shows success view', async () => {
    // Override isTokenValid function
    (isTokenValid as jest.Mock).mockReturnValue(true);

    renderWithProviders(<App />, {
      route: '/forgot-password/123/valid-token',
    });

    // fill out the form with valid data
    await fillOutTheForm('Test123!', 'Test123!');

    await submitForm();

    const loading = await screen.findByText(regex.loading);
    expect(loading).toBeInTheDocument();

    const success = await screen.findByText(regex.successPageText);
    expect(success).toBeInTheDocument();
  });

  test('submits the form with valid data and handles 403 error by redirecting to error page', async () => {
    // Override isTokenValid function
    (isTokenValid as jest.Mock).mockReturnValue(true);

    // overide api response
    server.use(
      http.post(`${baseUrl}/auth/reset-password/:token`, async () =>
        HttpResponse.json(
          { success: false, message: 'Sorry, your session is over', error: null },
          { status: 403 }
        )
      )
    );

    renderWithProviders(<App />, {
      route: '/forgot-password/123/invalid-token',
    });

    await fillOutTheForm('Test123!', 'Test123!');

    await submitForm();

    const error = await screen.findByText(regex.errorPageText);
    expect(error).toBeInTheDocument();
  });

  test('does NOT submit form when inputs are empty', async () => {
    (isTokenValid as jest.Mock).mockReturnValue(true);

    renderWithProviders(<App />, {
      route: '/forgot-password/123/valid-token',
    });

    await submitForm();

    expect(screen.queryByText(regex.loading)).not.toBeInTheDocument();

    expect(
      await screen.findByText(passwordMessages.required)
    ).toBeInTheDocument();

    expect(
      await screen.findByText(passwordRepeatedMessages.required)
    ).toBeInTheDocument();
  });

  test('does NOT submit form when passwords are not matching', async () => {
    (isTokenValid as jest.Mock).mockReturnValue(true);

    renderWithProviders(<App />, {
      route: '/forgot-password/123/valid-token',
    });

    await fillOutTheForm('Abcde123!', 'Efghijk123!');
    await submitForm();

    expect(screen.queryByText(regex.loading)).not.toBeInTheDocument();

    expect(
      await screen.findByText(passwordRepeatedMessages.oneOf)
    ).toBeInTheDocument();
  });

  test('doest NOT submit form when password is too short', async () => {
    (isTokenValid as jest.Mock).mockReturnValue(true);

    renderWithProviders(<App />, {
      route: '/forgot-password/123/valid-token',
    });

    await fillOutTheForm('Aa1!', 'Aa1!');
    await submitForm();

    expect(screen.queryByText(regex.loading)).not.toBeInTheDocument();

    expect(await screen.findByText(passwordMessages.min)).toBeInTheDocument();
  });

  test('does NOT submit form when password is too long', async () => {
    (isTokenValid as jest.Mock).mockReturnValue(true);

    renderWithProviders(<App />, {
      route: '/forgot-password/123/valid-token',
    });

    await fillOutTheForm('Test123!'.repeat(10), 'Test123!'.repeat(10));
    await submitForm();

    expect(screen.queryByText(regex.loading)).not.toBeInTheDocument();

    expect(await screen.findByText(passwordMessages.max)).toBeInTheDocument();
  });

  test('does NOT submit form when password does not contain special character', async () => {
    (isTokenValid as jest.Mock).mockReturnValue(true);

    renderWithProviders(<App />, {
      route: '/forgot-password/123/valid-token',
    });

    await fillOutTheForm('Test1234', 'Test1234');
    await submitForm();

    expect(screen.queryByText(regex.loading)).not.toBeInTheDocument();

    expect(
      await screen.findByText(passwordMessages.special)
    ).toBeInTheDocument();
  });

  test('does NOT submit form when password does not contain number', async () => {
    (isTokenValid as jest.Mock).mockReturnValue(true);

    renderWithProviders(<App />, {
      route: '/forgot-password/123/valid-token',
    });

    await fillOutTheForm('TestTest!', 'TestTest!');
    await submitForm();

    expect(screen.queryByText(regex.loading)).not.toBeInTheDocument();

    expect(
      await screen.findByText(passwordMessages.number)
    ).toBeInTheDocument();
  });
});
