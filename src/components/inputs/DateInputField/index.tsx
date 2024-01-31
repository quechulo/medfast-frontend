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
	children?: React.ReactNode;
	placeholder?: string;
	id: string;
	label: string;
	error: string;
	type: string;
	name: string;
	value: string;
	onChange: (e: ChangeEvent) => void;
	onBlur: (e: FocusEvent) => void;
	onKeyUp?: (e: KeyboardEvent) => void;
}

const DateInputField: React.FC<InputFieldProps> = ({
	id,
	label,
	error,
	children,
	...inputProps
}) => (
  <InputFieldWrapper>
    <Label htmlFor={id}>{label}</Label>
    <InputWrapper $isError={!!error}>
      <Input
        id={id}
        {...inputProps}
      />
      {children ? (
        <InputIconsWrapper>{children}</InputIconsWrapper>
				) : null}
    </InputWrapper>
    {error && <ErrorMsg>{error}</ErrorMsg>}
  </InputFieldWrapper>
	);

DateInputField.defaultProps = {
	children: null,
	placeholder: '',
	onKeyUp: () => {},
};

export default DateInputField;
