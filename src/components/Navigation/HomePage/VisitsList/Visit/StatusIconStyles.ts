import styled from 'styled-components';
import { ReactComponent as YourSvg } from './circle.svg';

const StyledSvg = styled(YourSvg)<{$fill: string}>`
  width: 10px;
  circle {
    fill: ${({ $fill }) => ($fill)};
  }
`;

export default StyledSvg;
