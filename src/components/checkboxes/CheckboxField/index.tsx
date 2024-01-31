import React, { ChangeEvent } from 'react';
import { CheckBoxLabel, CheckBoxInput } from './styles';

interface CheckboxFieldProps {
  id: string;
  label: string;
  name?: string;
  isChecked?: boolean;
  onChange: (e?: ChangeEvent<any>) => void;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  id,
  label,
  name,
  isChecked,
  onChange,
}) => (
  <CheckBoxLabel htmlFor={id}>
    <CheckBoxInput
      type="checkbox"
      id={id}
      name={name}
      checked={isChecked}
      onChange={onChange}
    />
    <span>{label}</span>
  </CheckBoxLabel>
);

CheckboxField.defaultProps = {
  name: undefined,
  isChecked: undefined,
};

export default CheckboxField;
