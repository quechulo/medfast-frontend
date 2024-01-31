import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { User } from '../../types/UserTypes';

interface AuthState {
  isLoggingOut: boolean;
  userInfo: User | null;
  forgotPasswordInfo: {
    email: string;
    token: string;
  };
}

const initialState: AuthState = {
  isLoggingOut: false,
  userInfo: null,
  forgotPasswordInfo: {
    email: '',
    token: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoggingOut: (state, action) => {
      const { isLoggingOut } = action.payload;
      state.isLoggingOut = isLoggingOut;
    },
    setUserInfo: (state, action) => {
      const { userInfo } = action.payload;
      state.userInfo = userInfo;
    },
    setForgotPasswordEmail: (state, action) => {
      const { email } = action.payload;
      state.forgotPasswordInfo.email = email;
    },
    setForgotPasswordToken: (state, action) => {
      const token = action.payload;
      state.forgotPasswordInfo.token = token;
    },
  },
});

export const { setIsLoggingOut, setUserInfo, setForgotPasswordEmail, setForgotPasswordToken } =
  authSlice.actions;

export default authSlice.reducer;

export const selectIsLoggingOut = (state: RootState) => state.auth.isLoggingOut;

export const selectUserData = (state: RootState) => state.auth.userInfo;

export const selectForgotPasswordInfo = (state: RootState) =>
  state.auth.forgotPasswordInfo;

export const selectForgotPasswordToken = (state: RootState) =>
  state.auth.forgotPasswordInfo.token;
