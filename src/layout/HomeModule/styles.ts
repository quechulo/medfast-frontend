import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100vh;
  overflow: auto;
  * {
    box-sizing: border-box;
  }
`;

export const ContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
  overflow-x: hidden;
`;

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  margin-bottom: 32px;
`;
