import React from 'react';
import StyledSvg from './visitsStyles';

interface YourComponentProps {
  fill: string;
}

const VisitsIcon: React.FC<YourComponentProps> = ({ fill }) => (
  <StyledSvg $fill={fill} />
);

export default VisitsIcon;
