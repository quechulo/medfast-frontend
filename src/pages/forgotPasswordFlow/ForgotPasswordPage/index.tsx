import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectForgotPasswordInfo } from 'src/redux/auth/authSlice';
import SliderLayout from 'src/layout/SliderLayout';
import {
  FORGOT_PASSWORD_STATUS_PARAM_ERROR,
  FORGOT_PASSWORD_STATUS_PARAM_OK,
} from 'src/utils/constants';
import EmailSection from './EmailSection';
import SuccessScreen from './SuccessScreen';
import ErrorScreen from './ErrorScreen';
import VerifyCodeSection from './VerifyCodeSection';

const ForgotPasswordPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const status = searchParams.get('status');

  const { token, email } = useSelector(selectForgotPasswordInfo);

  useEffect(() => {
    if (status && !token) {
      searchParams.delete('status');
      setSearchParams(searchParams.toString());
    }
  }, [searchParams, setSearchParams, status, token]);

  if (status === FORGOT_PASSWORD_STATUS_PARAM_OK && token) {
    return <SliderLayout element={<SuccessScreen />} />;
  }

  if (status === FORGOT_PASSWORD_STATUS_PARAM_ERROR && token) {
    return <SliderLayout element={<ErrorScreen />} />;
  }

  if (email) {
    return <SliderLayout element={<VerifyCodeSection />} />;
  }

  return <SliderLayout element={<EmailSection />} />;
};

export default ForgotPasswordPage;
