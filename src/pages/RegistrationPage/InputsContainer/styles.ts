import styled from 'styled-components';
import { lightMode } from '../../../assets/theme';

export const InputsWrapper = styled.div<{
  isVisible: boolean;
}>`
  display: ${({ isVisible }) => (isVisible ? 'inline-flex' : 'none')};
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
`;

export const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

export const ContentDiv = styled.div`
  min-width: 360px;
  max-width: 720px;
  padding: 40px;
  border-radius: 24px;
  background: ${lightMode.colors.mainWhite};
  box-shadow: 5px 0px 31px 0px #e4f3ff;
`;

export const ButtonContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  margin-bottom: 12px;
  margin-top: 8px;
`;

export const ButtonContainer66 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  margin-bottom: 12px;
  margin-top: 8px;
`;

export const Button33 = styled.div`
  flex: 1;
`;

export const Button66 = styled.div`
  flex: 2;
`;

export const SignInWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  font-size: ${lightMode.fontSize.md};
  line-height: 20px;
`;

export const RegistrationForm = styled.form`
  width: 100%;
  box-sizing: border-box;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const RegistrationFormLarge = styled.form`
  width: 100%;
  // height: 100%;
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const HelperText = styled.h5`
  line-height: 1.42857;
  font-weight: ${({ theme }) => theme.fontWeight.normal}
`;
