import styled from 'styled-components';
import { ReactComponent as YourSvg } from './prescriptionsIcon.svg';

const StyledSvg = styled(YourSvg)<{$fill: string}>`
  path {
    fill: ${({ $fill }) => ($fill)};
  }
`;

export default StyledSvg;
