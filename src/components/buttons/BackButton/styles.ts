import styled from 'styled-components';

export const Wrapper = styled.button`
  height: 40px;
  padding: 10px 9px 10px 0;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  border: none;
  background: transparent;
  &:hover {
    cursor: pointer;
  }
`;

export const TextWrapper = styled.span`
  color: ${({ theme }) => theme.colors.mainBlack};
  font-size: ${({ theme }) => theme.fontSize.large};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 20px;
`;
