import React from 'react';
import { ReactSVG } from 'react-svg';
import { Wrapper, Text } from './styles';

const NoPastVisits: React.FC = () => (
  <Wrapper>
    <Text>This is where the history of your visits will be stored</Text>
    <ReactSVG src="/assets/icons/noPastVisitsIcon.svg" />
  </Wrapper>
);

export default NoPastVisits;
