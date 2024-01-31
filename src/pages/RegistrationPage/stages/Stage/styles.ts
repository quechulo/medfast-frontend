import styled from 'styled-components';
import { lightMode } from '../../../../assets/theme';

const Wrapper = styled.span<{ status: boolean }>`
  // display: inline-block;
  text-align: center;
  width: 28px;
  height: 28px;
  line-height: 28px;
  font-weight: 500;
  font-size: 16px;
  border: 2px solid;
  border-radius: 50%;
  border-color: ${({ status }) => (status ? lightMode.colors.mainPurple : lightMode.colors.mainGray)};
  color: ${({ status }) => (status ? lightMode.colors.mainPurple : lightMode.colors.mainGray)};
`;

export default Wrapper;
