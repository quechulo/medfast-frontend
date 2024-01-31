import React, { ChangeEvent, FocusEvent, KeyboardEvent } from 'react';
import {
  InputFieldWrapper,
  InputWrapper,
  Label,
  Input,
  InputIconsWrapper,
  ErrorMsg,
} from './styles';

interface InputFieldProps {
  id: string;
  label: string;
  error: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent) => void;
  onBlur: (e: FocusEvent) => void;
  onKeyUp?: (e: KeyboardEvent) => void;
  children?: React.ReactNode;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  error,
  type,
  name,
  value,
  onChange,
  onBlur,
  onKeyUp,
  children,
  placeholder,
}) => (
  <InputFieldWrapper>
    <Label htmlFor={id}>{label}</Label>
    <InputWrapper $isError={!!error}>
      <Input
        {...{ id, type, name, value, onChange, onBlur, onKeyUp, placeholder }}
      />
      {children ? <InputIconsWrapper>{children}</InputIconsWrapper> : null}
    </InputWrapper>
    {error && <ErrorMsg>{error}</ErrorMsg>}
  </InputFieldWrapper>
);

export default InputField;
