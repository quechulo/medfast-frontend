/* eslint-disable arrow-body-style */
import React from 'react';
import { ReactSVG } from 'react-svg';
import { ISideMenuItem } from '../data';
import {
  SideMenuItemWrapper,
  ContentWrapper,
  IconWrapper,
  BadgeWrapper,
} from './styles';

interface SideMenuItemProps extends ISideMenuItem {
  isCollapsed: boolean;
}

const SideMenuItem: React.FC<SideMenuItemProps> = ({
  isCollapsed,
  title,
  icon,
  path,
}) => {
  return (
    <SideMenuItemWrapper
      to={path}
      $isCollapsed={isCollapsed}
    >
      <ContentWrapper $isCollapsed={isCollapsed}>
        <IconWrapper>
          <ReactSVG src={icon} />
        </IconWrapper>
        <span>{title}</span>
        {/* note: ready to be used for showing notifications */}
        {!isCollapsed ? (
          <BadgeWrapper $isCollapsed={isCollapsed}>
            <span>2</span>
          </BadgeWrapper>
        ) : null}
        {/* note end */}
      </ContentWrapper>
    </SideMenuItemWrapper>
  );
};

export default SideMenuItem;
