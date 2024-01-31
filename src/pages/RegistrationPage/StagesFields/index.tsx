import React from 'react';
import Line from '../stages/Line';
import Stage from '../stages/Stage';
import StagesWrapper from './styles';

const StageFields: React.FC<{
  // children?: React.ReactNode;
  currStage: number;
}> = (props) => {
  const { currStage } = props;

  const isChecked = (stage: number): boolean => {
    if (stage < currStage) {
        return true;
    }
        return false;
  };
  const isPurple = (stage: number): boolean => {
    if (stage <= currStage) {
        return true;
    }
        return false;
  };

  return (
    <StagesWrapper>
      <Stage text="1" isPurple={isPurple} isChecked={isChecked} />
      <Line stage={2} isPurple={isPurple} />
      <Stage
        text="2"
        isPurple={isPurple}
        isChecked={isChecked}
      />
      <Line stage={3} isPurple={isPurple} />
      <Stage
        text="3"
        isPurple={isPurple}
        isChecked={isChecked}
      />
      <Line stage={4} isPurple={isPurple} />
      <Stage
        text="4"
        isPurple={isPurple}
        isChecked={isChecked}
      />
      <Line stage={5} isPurple={isPurple} />
      <Stage
        text="5"
        isPurple={isPurple}
        isChecked={isChecked}
      />
    </StagesWrapper>
  );
};

export default StageFields;
