import React from 'react';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';
import { LogoWrapper, IconWrapper, HeaderWrapper } from './style';

const Logo: React.FC = () => (
  <Link to="/">
    <LogoWrapper>
      <IconWrapper>
        <ReactSVG src="/assets/icons/logo.svg" />
      </IconWrapper>
      <HeaderWrapper>
        <ReactSVG src="/assets/icons/header.svg" />
      </HeaderWrapper>
    </LogoWrapper>
  </Link>
);

export default Logo;
