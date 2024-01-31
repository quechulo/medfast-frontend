import React from 'react';
import { Label, RadioMainWrapper, SVGWrapper } from './styles';

interface Props {
  value: boolean;
  text: string;
  setValue: (a: boolean) => void;
}

const RadioInput: React.FC<Props> = ({
  value,
  text,
  setValue,
}) => {
  const handleCheck = () => {
    setValue(!value);
  };

  return (
    <RadioMainWrapper>
      {value
        ? (
          <SVGWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" onClick={handleCheck}>
              <rect x="1" y="1" width="22" height="22" rx="11" fill="white" stroke="#8E68F3" strokeWidth="2" />
              <rect x="4" y="4" width="16" height="16" rx="8" fill="#8E68F3" />
            </svg>
          </SVGWrapper>
          )
        : (
          <SVGWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={handleCheck}>
              <rect x="1" y="1" width="22" height="22" rx="11" fill="white" stroke="#9A9A9A" strokeWidth="2" />
            </svg>
          </SVGWrapper>
          )}
      <Label>
        {text}
      </Label>
    </RadioMainWrapper>
  );
};

export default RadioInput;
