import styled from 'styled-components';

export const Wrapper = styled.span`
  cursor: pointer;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.colors.mainPurple};
  margin-top: 8px;
`;
