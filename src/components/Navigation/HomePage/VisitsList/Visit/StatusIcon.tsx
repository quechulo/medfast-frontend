import React from 'react';
import StyledSvg from './StatusIconStyles';

interface YourComponentProps {
  fill: string;
}

const StatusIcon: React.FC<YourComponentProps> = ({ fill }) => (
  <StyledSvg $fill={fill} />
);

export default StatusIcon;
