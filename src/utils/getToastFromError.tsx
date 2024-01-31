import React from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import Toast, { ToastType } from '../components/Toast';
import { ApiErrorResponse } from '../types/ApiResponseTypes';

const getToastFromError = (
  error: FetchBaseQueryError | SerializedError | undefined
) => {
  let type: ToastType = 'warning';
  let message = 'Something went wrong. Please try again later.';

  if (error && 'status' in error && 'data' in error) {
    const errorData = error.data as ApiErrorResponse<unknown>;
    type = 'error';
    message = errorData.message;
  }

  return <Toast type={type} message={message} />;
};

export default getToastFromError;
