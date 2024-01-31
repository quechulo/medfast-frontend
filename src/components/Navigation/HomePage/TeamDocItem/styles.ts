import styled from 'styled-components';

export const GradientCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  border-radius: 50%;
  background: linear-gradient(
      160deg,
      rgba(95, 93, 183, 0.2) 22.37%,
      rgba(255, 255, 255, 0.15) 72.04%
    ),
    #7a77ff;
`;

export const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;
