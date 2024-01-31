import React from 'react';
import LineWrapper from './styles';

const Line: React.FC<{
  // children?: React.ReactNode;
  stage: number;
  isPurple: (stage: number) => boolean;
}> = (props) => {
  const { stage, isPurple } = props;
  return <LineWrapper status={isPurple(stage)} />;
};
export default Line;
