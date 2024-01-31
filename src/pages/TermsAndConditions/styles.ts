import styled from 'styled-components';

export const TandCWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

export const TopContainer = styled.div`
  margin: 24px;
`;

export const BackBtnWrapper = styled.div`
  margin: 24px;
`;

export const ContentDiv = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  margin: 0 24px 0 24px;
  padding: 40px;
  width: 100%;
  box-shadow: 5px 0px 31px 0px #e4f3ff;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Header = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 30px;
`;

export const Body = styled.body`
font-size: ${({ theme }) => theme.fontSize.large};
font-style: normal;
font-weight: ${({ theme }) => theme.fontWeight.normal};
line-height: 22px;
max-height: 800px;
overflow-y: scroll;
`;

export const Timestamp = styled.div`
padding: 16px;
border-radius: 8px;
background: ${({ theme }) => theme.colors.activeMenuTab};
`;
