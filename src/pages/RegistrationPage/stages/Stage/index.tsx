import React from 'react';
import { ReactSVG } from 'react-svg';
import Wrapper from './styles';

const Stage: React.FC<{
  // children?: React.ReactNode;
  text: string;
  isPurple: (stage: number) => boolean;
  isChecked: (stage: number) => boolean;
}> = (props) => {
  const { text, isPurple, isChecked } = props;
  return (
    isChecked(parseInt(text, 10)) ? (
      <div style={{ width: '32px' }}>
        <ReactSVG src="/assets/icons/step.svg" />
      </div>
    ) : (
      <Wrapper status={isPurple(parseInt(text, 10))}>{text}</Wrapper>
    )
  );
};
export default Stage;
