import styled from 'styled-components';
import { lightMode } from '../../../../assets/theme';

const LineWrapper = styled.span<{ status: boolean }>`
  display: inline-block;
  width: 72px;
  height: 1px;
  border: 2px solid;
  border-radius: 3px;
  border-color: ${({ status }) => (status ? lightMode.colors.mainPurple : lightMode.colors.mainGray)};
  background-color: ${({ status }) => (status ? lightMode.colors.mainPurple : lightMode.colors.mainGray)};
`;

export default LineWrapper;
