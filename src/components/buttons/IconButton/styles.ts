import styled from 'styled-components';

interface IProps {
  $variant: 'outlined' | 'solid' | 'text' | 'redOutlined';
}

export const Wrapper = styled.button<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 8px;
  border-radius: 12px;
  height: 44px;
  padding: 10px 16px;
  width: 100%;
  cursor: pointer;

  // styles to override
  background-color: unset;
  border: none;
  color: unset;

  :hover {
    // Note: waiting for the designs
  }
`;

// Button variants START

export const OutlinedWrapper = styled(Wrapper)`
  background-color: ${({ theme }) => theme.colors.mainWhite};
  border: 1px solid ${({ theme }) => theme.colors.mainPurple};
  border: 1px solid ${({ theme }) => `${theme.colors.mainPurple}4D`}; // 30% opacity
  color: ${({ theme }) => theme.colors.mainPurple};
`;

export const SolidWrapper = styled(Wrapper)`
  background-color: ${({ theme }) => theme.colors.mainPurple};
  border: 1px solid ${({ theme }) => theme.colors.mainPurple};
  color: ${({ theme }) => theme.colors.mainWhite};
`;

export const RedOutlinedWrapper = styled(Wrapper)`
  background-color: ${({ theme }) => theme.colors.mainWhite};
  border: 1px solid ${({ theme }) => `${theme.colors.mainRed}4D`}; // 30% opacity
  color: ${({ theme }) => theme.colors.mainRed};
`;

export const TextWrapper = styled(Wrapper)`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.mainPurple};
`;

// Button variants END

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }
`;

export const Text = styled.span`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
