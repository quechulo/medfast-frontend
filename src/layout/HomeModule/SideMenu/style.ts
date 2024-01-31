import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  SideMenuItemWrapper,
  ContentWrapper as SideMenuItemContent,
  IconWrapper as SideMenuItemIcon,
} from './SideMenuItem/styles';

export const Wrapper = styled.div<{ $isCollapsed?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ $isCollapsed }) => ($isCollapsed ? '72px' : '220px')};
  height: 100vh;
  padding: 16px 0 24px;
  background-color: ${({ theme }) => theme.colors.mainWhite};
  box-shadow: 1px 0px 1px 0px
    ${({ theme }) => theme.shadows.homePageElementsBoxShadow};
  transition: width 0.3s ease-in-out;
  color: ${({ theme }) => theme.colors.gray3};

  * {
    box-sizing: border-box;
  }
`;

export const LogoWrapper = styled(Link)<{ $isCollapsed?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 44px;
  transition: width 0.3s ease-in-out;

  // logo styles
  div {
    width: 48px;
    height: 48px;
  }

  // logo header styles
  div + div {
    width: 84px;
    height: 24px;
    padding: 4px;
    display: ${({ $isCollapsed }) => ($isCollapsed ? 'none' : 'block')};

    svg {
      width: 84px;
      height: 24px;
    }
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  width: 100%;
`;

export const NavListWrapper = styled.div<{ $isCollapsed?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  h5 {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: normal;
    margin: unset;
    padding: ${({ $isCollapsed }) => ($isCollapsed ? '8px' : '8px 24px')};
    text-align: ${({ $isCollapsed }) => ($isCollapsed ? 'center' : 'left')};
    width: 100%;
  }
`;

export const NavListButton = styled(SideMenuItemWrapper).attrs({
  as: 'button',
})<{ $isCollapsed?: boolean}>`
  background-color: unset;
`;

export const NavListButtonContent = styled(SideMenuItemContent)<{$isCollapsed?: boolean;}>``;

export const NavListButtonIcon = styled(SideMenuItemIcon)``;

export const NavLogoutIcon = styled(SideMenuItemIcon)`
  // to offset the arrow icon from the logout icon in the logout button
  margin-left: 2px;
`;

export const NavActionListWrapper = styled(NavListWrapper)`
  flex: 1;
  justify-content: flex-end;
  padding: ${({ $isCollapsed }) => ($isCollapsed ? '0' : '0 24px 0 8px')};
`;

export const NavActionListItem = styled(SideMenuItemWrapper).attrs({
  as: 'button',
})<{ $isCollapsed?: boolean }>`
  background-color: unset;
  color: ${({ theme }) => theme.colors.mainPurple};
  cursor: pointer;
  padding: ${({ $isCollapsed }) => ($isCollapsed ? '10px' : '10px 16px')};

  &:hover {
    background-color: unset;
  }
`;

export const NavActionListItemContent = styled(SideMenuItemContent)<{$isCollapsed?: boolean;}>`
  gap: 8px;
  justify-content: ${({ $isCollapsed }) =>
    $isCollapsed ? 'center' : 'flex-start'};
`;

export const NavActionListItemIcon = styled(SideMenuItemIcon)``;
