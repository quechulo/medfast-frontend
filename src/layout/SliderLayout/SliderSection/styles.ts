import styled from 'styled-components';

const SliderSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: ${({ theme }) => theme.gradients.imageBackground},
    url('/assets/images/doctors.jpg');
  background-position: -232px -84px;
  background-size: 166% 112%;
  background-repeat: no-repeat;
  height: 100%;
  padding-bottom: 24px;
  width: 100%;
`;

export default SliderSectionWrapper;
