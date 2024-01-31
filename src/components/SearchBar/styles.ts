import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  gap: 8px;

  &:has(input:focus, input:active) {
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.mainPurple};
    background: ${({ theme }) => theme.colors.lightPurple};

    svg {
      color: ${({ theme }) => theme.colors.mainPurple};
    }
  }
`;

export const SearchBarIcon = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.mainGray};
`;

export const SearchBarInput = styled.input`
  outline: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 22px;
  background: inherit;
  width: 100%;
`;
