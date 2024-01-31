import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 1168px;
  column-gap: 1em;
`;

export const GridItemLeft = styled.div`
  grid-column: span 1;
  display: inline-flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 5px 0px 72px 0px #e5f3ff;
  margin-top: 16px;
  width: 100%;
`;

export const GridItemRight = styled.div`
  grid-column: span 1;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-top: 16px;
  width: 100%;
`;

export const BottomHeader = styled.h3`
margin-top: 32px;
color: #313131;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 22px; /* 122.222% */
`;

export const Column = styled.div`
width: 100%;
`;
