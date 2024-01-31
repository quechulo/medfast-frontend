import '@testing-library/jest-dom';
import { http, HttpResponse } from 'msw';
import { ApiSuccessResponse } from '../../types/ApiResponseTypes';

export const baseUrl = process.env.REACT_APP_API_URL;

const handlers = [
  http.post(`${baseUrl}/auth/reset-password`, async ({ request }) => {
    const email = await request.json();

    const mockResponse: ApiSuccessResponse<null> = {
      success: true,
      message: `Password reset email sent to ${email}`,
      data: null,
    };

    return HttpResponse.json(mockResponse, { status: 200 });
  }),
  http.post(
    `${baseUrl}/auth/reset-password/:token`,
    ({ request: _request }) => {
      const mockResponse: ApiSuccessResponse<null> = {
        success: true,
        message: 'Password reset successful',
        data: null,
      };

      return HttpResponse.json(mockResponse, { status: 200 });
    }
  ),
  http.get('*/assets/*', () => HttpResponse.json(null, { status: 200 })),
];

export { handlers };
