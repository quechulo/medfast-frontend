import styled from 'styled-components';
import theme from 'src/assets/theme';

export const RadioMainWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  line-height: 20px;
`;

export const Label = styled.div`
font-size: ${theme.fontSize.md};
font-weight: ${theme.fontWeight.normal};
line-height: 20px;
white-space: nowrap;

`;

export const SVGWrapper = styled.div`
width: 24px;
height: 24px;
`;
