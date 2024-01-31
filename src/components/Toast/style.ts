import styled from 'styled-components';

export const Toast = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 100%;
  width: 100%;
  border-radius: 4px 8px 8px 4px;
  padding: 0 16px;
`;

export const ErrorToast = styled(Toast)`
  background-color: ${({ theme }) => theme.colors.errorToastBackground};
  border-left: 4px solid ${({ theme }) => theme.colors.mainRed};
`;

export const SuccessToast = styled(Toast)`
  background-color: ${({ theme }) => theme.colors.successToastBackground};
  border-left: 4px solid ${({ theme }) => theme.colors.mainGreen};
`;

export const WarningToast = styled(Toast)`
  background-color: ${({ theme }) => theme.colors.warningToastBackground};
  border-left: 4px solid ${({ theme }) => theme.colors.mainYellow};
`;

export const ToastIcon = styled.div`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
`;

export const ToastMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-style: normal;
  line-height: 1.375;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export default Toast;
