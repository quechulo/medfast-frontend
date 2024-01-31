import React from 'react';
import StyledSvg from './prescriptionsStyles';

interface YourComponentProps {
  fill: string;
}

const PrescriptionsIcon: React.FC<YourComponentProps> = ({ fill }) => (
  <StyledSvg $fill={fill} />
);

export default PrescriptionsIcon;
