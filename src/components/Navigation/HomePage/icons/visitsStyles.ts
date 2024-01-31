import styled from 'styled-components';
import { ReactComponent as YourSvg } from './visitsIcon.svg';

const StyledSvg = styled(YourSvg)<{$fill: string}>`
  path {
    fill: ${({ $fill }) => ($fill)};
  }
`;

export default StyledSvg;
