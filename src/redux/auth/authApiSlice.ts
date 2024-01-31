import apiSlice from '../api/apiSlice';
import { ApiSuccessResponse } from '../../types/ApiResponseTypes';
import { User } from '../../types/UserTypes';
import {
  setIsLoggingOut,
  setUserInfo,
  setForgotPasswordEmail,
} from './authSlice';
import ValidateResetCode from '../../types/ValidateResetCode';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<
      ApiSuccessResponse<string>,
      { email: string; password: string; isPersist: boolean }
    >({
      query: (credentials) => ({
        url: '/auth',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    sendLogout: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          dispatch(setIsLoggingOut({ isLoggingOut: true }));
          await queryFulfilled;
          // make sure that components are unmounted before resetting the api state
          setTimeout(() => {
            dispatch(apiSlice.util.resetApiState());
          }, 1000);
          dispatch(setUserInfo({ userInfo: null }));
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error);
        } finally {
          dispatch(setIsLoggingOut({ isLoggingOut: false }));
        }
      },
    }),
    getUserInfo: builder.query<ApiSuccessResponse<User>, void>({
      query: () => ({
        url: '/auth/me',
        method: 'GET',
        tags: ['userInfo'],
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data: { data: userInfo } = {} } = await queryFulfilled;
          dispatch(setUserInfo({ userInfo }));
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log(error);
        }
      },
    }),
    sendForgotPasswordEmail: builder.mutation<
      ApiSuccessResponse<string>,
      { email: string }
    >({
      query: (data) => ({
        url: '/auth/reset-password',
        method: 'POST',
        body: { email: data.email },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(setForgotPasswordEmail({ email: arg.email }));
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log(error);
        }
      },
    }),
    verifyCode: builder.mutation({
      query: (validationData: ValidateResetCode) => ({
        url: '/auth/reset-password/verify-code',
        method: 'POST',
        body: validationData,
      }),
    }),
    sendForgotPasswordNewPassword: builder.mutation<
      ApiSuccessResponse<string>,
      { password: string; token: string }
    >({
      query: ({ password, token }) => ({
        url: `/auth/reset-password/${token}`,
        method: 'POST',
        body: { newPassword: password },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSendLogoutMutation,
  useGetUserInfoQuery,
  useSendForgotPasswordEmailMutation,
  useVerifyCodeMutation,
  useSendForgotPasswordNewPasswordMutation,
} = authApiSlice;
