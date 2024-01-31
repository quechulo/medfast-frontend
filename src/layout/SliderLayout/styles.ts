import styled from 'styled-components';

const TwoColsSliderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  overflow: auto;

  * {
    box-sizing: border-box;
  }
`;

export default TwoColsSliderWrapper;
