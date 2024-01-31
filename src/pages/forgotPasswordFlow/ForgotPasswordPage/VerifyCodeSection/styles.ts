import styled from 'styled-components';
import { lightMode } from 'src/assets/theme';

export const VerifyCodeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  width: 372px;
  height: 412px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
`;

export const Description = styled.div`
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
`;

export const CodeWrapper = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  gap: 12px;
`;

export const ResendCode = styled.span`
  margin-top: 8px;
  display: flex;
  gap: 8px;
  align-items: center;

  line-height: 22px;
  cursor: pointer;
`;

export const ResendCodeWaiting = styled.span`
  height: 30px;
  margin-top: 8px;
  display: flex;
  gap: 8px;
  align-items: center;

  line-height: 22px;
`;

export const SignInWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: ${lightMode.fontSize.md};
  line-height: 20px;
`;

export const HelperText = styled.h5`
  line-height: 1.42857;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

export const BottomContainer = styled.div`
  height: 56px;
`;

export const TimerSpan = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const ToastWrapper = styled.div`
  width: 100%;
  height: 60px;
`;
