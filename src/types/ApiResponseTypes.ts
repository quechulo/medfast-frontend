export type ApiSuccessResponse<T> = {
  success: true;
  message: string;
  data: T;
}

export type ApiErrorResponse<T> = {
  success: false;
  message: string;
  error: T;
}
