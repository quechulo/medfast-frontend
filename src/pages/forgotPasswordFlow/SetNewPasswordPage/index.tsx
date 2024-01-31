import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SliderLayout from 'src/layout/SliderLayout';
import { SetNewPasswordPageParams } from 'src/types/ForgotPasswordTypes';
import { isTokenValid } from 'src/utils/resetPasswordToken';
import { setForgotPasswordToken } from 'src/redux/auth/authSlice';
import SetNewPasswordSection from './SetNewPasswordSection';

const SetNewPasswordPage: React.FC = () => {
  const { userId, token } = useParams<SetNewPasswordPageParams>();
  const dispatch = useDispatch();

  if (!userId || !token || !isTokenValid(userId, token)) {
    return <Navigate to="/forgot-password" replace />;
  }

  // Set token in redux store
  dispatch(setForgotPasswordToken(token));

  return <SliderLayout element={<SetNewPasswordSection />} />;
};

export default SetNewPasswordPage;
