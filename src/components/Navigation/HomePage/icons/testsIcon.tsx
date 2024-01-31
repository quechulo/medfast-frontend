import React from 'react';
import StyledSvg from './testsStyles';

interface YourComponentProps {
  fill: string;
}

const TestsIcon: React.FC<YourComponentProps> = ({ fill }) => (
  <StyledSvg $fill={fill} />
);

export default TestsIcon;
