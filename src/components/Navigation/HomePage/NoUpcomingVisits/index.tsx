import React from 'react';
import { Wrapper, Text } from './styles';

const NoUpcomingVisits: React.FC = () => (
  <Wrapper>
    <Text>You have no upcoming visits Create an appointment for today</Text>
    <button type="button">Make an appointment</button>
  </Wrapper>
);

export default NoUpcomingVisits;
