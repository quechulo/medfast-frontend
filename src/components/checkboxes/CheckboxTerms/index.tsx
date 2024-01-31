import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckBoxLabel, CheckBoxInput, SimpleSpan, LinkSpan, Container } from './styles';

interface CheckboxTermProps {
  id: string;
  value: boolean;
  label: string;
  onChange: () => void;
}

const CheckboxTerm: React.FC<CheckboxTermProps> = ({
  id,
  label,
  value,
  onChange,
}) => {
  const navigate = useNavigate();
  const handleTaCClick = () => {
    navigate('/terms-and-conditions');
  };

  return (
    <Container>
      <CheckBoxLabel htmlFor={id}>
        <CheckBoxInput
          type="checkbox"
          id={id}
          checked={value}
          onChange={onChange}
        />
      </CheckBoxLabel>
      <SimpleSpan>
        {label}
        <LinkSpan onClick={handleTaCClick}>Terms and Conditions</LinkSpan>
      </SimpleSpan>
    </Container>
  );
};

export default CheckboxTerm;
