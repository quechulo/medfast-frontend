import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SideMenuItemWrapper = styled(NavLink)<{ $isCollapsed?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray3};
  width: 100%;
  padding: ${({ $isCollapsed }) => ($isCollapsed ? '24px' : '18px 24px')};
  height: 60px;
  transition: width 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.homeNavLinkHoverBackground};
  }

  &.active {
    background-color: ${({ theme }) =>
      theme.colors.homeNavLinkActiveBackground};
    color: ${({ theme }) => theme.colors.mainPurple};
    border-left: 4px solid ${({ theme }) => theme.colors.mainPurple};
    padding-left: 20px;
  }
`;

export const ContentWrapper = styled.div<{ $isCollapsed?: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  gap: 12px;
  width: 100%;

  span {
    display: ${({ $isCollapsed }) => ($isCollapsed ? 'none' : 'inline-block')};
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-size: ${({ theme }) => theme.fontSize.large};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: normal;
    transition: display 2s ease-in-out;
  }
`;

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  // note: ReactSvg wraps injected svg with two nested divs
  div {
    width: 24px;
    height: 24px;
  }
`;

export const BadgeWrapper = styled.div<{ $isCollapsed?: boolean }>`
  display: ${({ $isCollapsed }) => ($isCollapsed ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => `${theme.colors.gray3}0D`}; // 5% opacity
  border-radius: 51%;
  height: 24px;
  position: absolute;
  right: -4px;
  width: 32px;
  transition: display 2s ease-in-out;

  span {
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-style: normal;
    line-height: normal;
    color: ${({ theme }) => theme.colors.primaryText};
  }
`;
