import React, { SetStateAction, useRef, useState } from 'react';
import { Container, Input } from './styles';

type Props = {
  setFinalCode: (code: SetStateAction<string>) => void;
};

const CodeInput: React.FC<Props> = (props) => {
  const { setFinalCode } = props;
  const [code, setCode] = useState(['', '', '', '']);
  const codeRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleChange = (index: number, value: string) => {
    const newCode = [...code];
    // eslint-disable-next-line prefer-destructuring
    newCode[index] = value.toString()[0];
    setCode(newCode);

    if (value !== '' && index < code.length - 1) {
      codeRefs[index + 1]?.current?.focus();
    }

    setFinalCode(
      newCode[0] + newCode[1] + newCode[2] + newCode[3]
    );
  };

  const handleBackspace = (index: number) => {
    const newCode = [...code];
    if (index > 0 && newCode[index] === '') {
      newCode[index - 1] = '';
      codeRefs[index - 1]?.current?.focus();
    } else {
      newCode[index] = '';
    }
    setCode(newCode);
  };

  return (
    <Container>
      {code.map((digit, index) => (
        <Input
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          ref={codeRefs[index]}
          type="number"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Backspace') {
              handleBackspace(index);
            }
          }}
        />
      ))}
    </Container>
  );
};

export default CodeInput;
