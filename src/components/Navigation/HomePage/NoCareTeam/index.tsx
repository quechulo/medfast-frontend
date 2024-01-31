import React from 'react';
import { ReactSVG } from 'react-svg';
import { Wrapper, Text } from '../NoPastVisits/styles';

const NoCareTeam: React.FC = () => (
  <Wrapper>
    <Text>There will be a team of doctors assigned to you</Text>
    <ReactSVG src="/assets/icons/noCareTeamIcon.svg" />
  </Wrapper>
);

export default NoCareTeam;
