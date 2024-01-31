import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => `${theme.colors.mainGray}B3`}; // 70% opacity
  height: 100vh;
  left: auto;
  position: fixed;
  top: auto;
  width: 100vw;
  z-index: 11;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  width: 376px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.mainWhite};
  box-shadow: 5px 0px 18px 0px #f1f1f1; // TODO: Ask about this shadow and check in Figma
  z-index: 12;
`;

export const MainText = styled.h2`
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const SecondaryText = styled.h4`
  font-style: normal;
  line-height: 1.5;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  button {
    width: 150px;
    height: 56px;
    cursor: pointer;
  }
`;
