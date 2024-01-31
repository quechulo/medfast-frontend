import React from 'react';
import { ReactSVG } from 'react-svg';
import {
  SuccessToast,
  ErrorToast,
  WarningToast,
  ToastIcon,
  ToastMessage,
} from './style';

export type ToastType = 'success' | 'error' | 'warning';

interface Props {
  type: ToastType;
  message: string;
}

const Toast: React.FC<Props> = ({ type, message }) => {
  let ToastWrapper = SuccessToast;

  if (type === 'error') {
    ToastWrapper = ErrorToast;
  }

  if (type === 'warning') {
    ToastWrapper = WarningToast;
  }

  return (
    <ToastWrapper>
      <ToastIcon>
        <ReactSVG src={`/assets/icons/${type}.svg`} />
      </ToastIcon>
      <ToastMessage className="toastMessage">{message}</ToastMessage>
    </ToastWrapper>
  );
};

export default Toast;
