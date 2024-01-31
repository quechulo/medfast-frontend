import React from 'react';
import { ReactSVG } from 'react-svg';
import EyeIconWrapper from './style';

const Eye: React.FC<{
	isPasswordVisible: boolean;
	handleToggle: () => void;
}> = ({ isPasswordVisible, handleToggle }) => (
  <EyeIconWrapper>
    <ReactSVG
      src={`/assets/icons/${isPasswordVisible ? 'eye' : 'eyeOff'}.svg`}
      onMouseDown={handleToggle}
    />
  </EyeIconWrapper>
	);

export default Eye;
