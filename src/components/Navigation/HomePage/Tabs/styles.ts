import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => (theme.colors.homePageBorder)};
  width: 420px;

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const Tab = styled.button<{ $isSelected: boolean }>`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  background: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.mainPurple : theme.colors.mainWhite};
  padding: 8px 24px;
  height: 39px;

  &:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  &:last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`;

export const Text = styled.h4<{ $isSelected: boolean }>`
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.mainWhite : theme.colors.primaryText};
`;
