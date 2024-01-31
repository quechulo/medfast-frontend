import React, { useEffect, useState } from 'react';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { ReactSVG } from 'react-svg';
import { useDispatch, useSelector } from 'react-redux';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { Tooltip } from 'react-tooltip';
import { useNavigate } from 'react-router-dom';
import BigButton from 'src/components/buttons/BigButton';
import Logo from 'src/components/Logo';
import CodeInput from 'src/components/inputs/CodeInput';
import Toast from 'src/components/Toast';
import {
  useSendForgotPasswordEmailMutation,
  useVerifyCodeMutation,
} from 'src/redux/auth/authApiSlice';
import { selectForgotPasswordInfo, setForgotPasswordEmail, setForgotPasswordToken } from 'src/redux/auth/authSlice';
import ValidateResetCode from 'src/types/ValidateResetCode';
import { ApiSuccessResponse } from 'src/types/ApiResponseTypes';
import StyledLink from 'src/components/StyledLink/styles';
import {
  ContentWrapper,
  VerifyCodeWrapper,
  LogoWrapper,
  Description,
  IconWrapper,
  CodeWrapper,
  ResendCode,
  SignInWrapper,
  HelperText,
  BottomContainer,
  TimerSpan,
  ToastWrapper,
  ResendCodeWaiting,
} from './styles';

interface JwtPayloadWithUserId extends JwtPayload {
  userId: string;
}

const VerifyCodeSection: React.FC = () => {
  const forgotPasswordInfo = useSelector(selectForgotPasswordInfo);
  const [sendForgotPasswordEmail, { isLoading, isSuccess }] =
    useSendForgotPasswordEmailMutation();
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [seconds, setSeconds] = useState(60);
  const [isUserWaiting, setIsUserWaiting] = useState(true);
  const [isCodeWrong, setIsCodeWrong] = useState(false);
  const [isVerificationDisabled, setIsVerificationDisabled] = useState(true);

  const [verifyCode] = useVerifyCodeMutation();

  const isVerifyCodeSuccess = (res: any): res is FetchBaseQueryError =>
    'data' in res;
  const isVerifyCodeError401 = (res: any): res is FetchBaseQueryError =>
    res.error.status === 401;
  const isFetchError = (res: any): res is FetchBaseQueryError =>
    res.error.status === 'FETCH_ERROR';

  const dispatch = useDispatch();

  const onVerify = async () => {
    const validationData: ValidateResetCode = {
      email: forgotPasswordInfo.email,
      code: code.toString(),
    };
    const res = await verifyCode(validationData);
    if (isVerifyCodeSuccess(res)) {
      setIsCodeWrong(false);
      const token = res.data as ApiSuccessResponse<string>;
      dispatch(setForgotPasswordToken(token.data));
      const decoded = jwtDecode<JwtPayloadWithUserId>(token.data);
      dispatch(setForgotPasswordEmail({ email: '' }));
      // Navigate user to change password screen
      navigate(`/forgot-password/${decoded.userId}/${token.data}`, { replace: true });
    } else if (isFetchError(res)) {
      alert('internal server error');
    } else if (isVerifyCodeError401(res)) {
      setIsCodeWrong(true);
    }
  };

  useEffect(() => {
    const codeLength = code.toString().length;
    if (codeLength === 4) {
      setIsVerificationDisabled(false);
    } else {
      setIsVerificationDisabled(true);
    }
  }, [code]);

  const startTimer = () => {
    setSeconds(60);
    let helpSeconds = 60;
    const timer = setInterval(() => {
      helpSeconds -= 1;
      setSeconds(helpSeconds);
      if (helpSeconds === 0) {
        clearInterval(timer);
        setIsUserWaiting(false);
        return 0;
      }
      return helpSeconds;
    }, 1000);
  };

  const resendCode = () => {
    sendForgotPasswordEmail(forgotPasswordInfo);
    // TODO handle 429 - too many request via <Toast>
    setIsUserWaiting(true);
    startTimer();
  };

  // startTimer on render page
  useEffect(() => {
    startTimer();
  }, []);

  return (
    <VerifyCodeWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <ContentWrapper>
        <Description>
          <IconWrapper>
            <ReactSVG src="assets/icons/checkEmail.svg" />
          </IconWrapper>
          <h2>Check your email</h2>
          <h4>
            We emailed a confirmation code with 4
            <br />
            numbers to
            {' '}
            {forgotPasswordInfo.email}
          </h4>
        </Description>

        <CodeWrapper>
          <CodeInput setFinalCode={setCode} />
          {isUserWaiting && !isLoading && (
            <ResendCodeWaiting>
              <h4
                data-tooltip-id="resend-code-tooltip"
                data-tooltip-content="You will be able to resend new code when countdown stops"
              >
                Resend code in
              </h4>
              <TimerSpan>{seconds}</TimerSpan>
              <Tooltip
                id="resend-code-tooltip"
                style={{ backgroundColor: '#FBBC41', color: '#ffffff' }}
              />
            </ResendCodeWaiting>
          )}
          {isLoading && !isSuccess && (
            <p>Loading...</p>
          )}
          {!isUserWaiting && !isLoading && (
            <ResendCode onClick={resendCode}>
              <h4>Resend code</h4>
              <ReactSVG src="assets/icons/resendIcon.svg" />
            </ResendCode>
          )}

          {isCodeWrong && (
            <ToastWrapper>
              <Toast type="error" message="Code is wrong" />
            </ToastWrapper>
          )}
          {/* TODO: Implement error handling  */}
          {/* {!isSuccess && isUserWaiting && (
            <ToastWrapper>
              <Toast
                type="error"
                message="Server error please try again later"
              />
            </ToastWrapper>
          )} */}
        </CodeWrapper>

        <BottomContainer>
          <BigButton
            text="Verify"
            isDisable={isVerificationDisabled}
            onClick={onVerify}
          />
          <SignInWrapper>
            <HelperText>Back to</HelperText>
            <StyledLink to="/" $fWeight={600}>
              Sign In
            </StyledLink>
          </SignInWrapper>
        </BottomContainer>
      </ContentWrapper>
    </VerifyCodeWrapper>
  );
};

export default VerifyCodeSection;
