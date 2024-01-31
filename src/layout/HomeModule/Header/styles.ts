import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  gap: 32px;
  background-color: ${({ theme }) => theme.colors.mainWhite};
  box-shadow: 0px 1px 1px 1px
    ${({ theme }) => theme.shadows.homePageElementsBoxShadow};
  height: 76px;
  padding: 16px 32px;
  width: 100%;
`;

export const SearchWrapper = styled.div`
  flex: 1;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 24px;
  max-width: 636px;
`;

export const ButtonWrapper = styled.div`
  width: 216px;
`;

export const HeaderIconWrapper = styled.div`
  padding: 10px;
  width: 44px;
  height: 44px;
  position: relative;
  border-radius: 51%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.homeNavLinkHoverBackground};
  }
`;

// note: propably another component in the future
export const HeaderIcon = styled.div`
  color: ${({ theme }) => theme.colors.mainPurple};
  padding: 2px 3px;
`;

export const HeaderIconBadge = styled.span`
  position: absolute;
  right: 12px;
  top: 12px;
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.mainRed};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.lightPurple};
`;
// end of note

// note: propably another component in the future
export const PersonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const PersonImageWrapper = styled.div`
  width: 44px;
  height: 44px;
  flex-shrink: 0;

  img {
    vertical-align: middle;
    width: 100%;
    height: 100%;
    background-size: contain;
    border-radius: 50%;
  }
`;

export const PersonName = styled.span`
  color: ${({ theme }) => theme.colors.gray1};
  font-size: ${({ theme }) => theme.fontSize.large};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 20px;

  @media (max-width: ${({ theme }) => theme.breakPoints.xxl}) {
    width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
// end of note
