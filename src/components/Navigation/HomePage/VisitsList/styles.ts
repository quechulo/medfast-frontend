import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 16px;
`;

export const LineContainer = styled.div`
  width: 8px;
`;

export const List = styled.div<{ $isExpanded: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  // width: 100%;
`;

export const NoVisitsWrapper = styled.div`
  display: flex;
  width: 1142px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 16px;
  gap: 10px;
  box-shadow: 5px 0px 72px 0px #e5f3ff;
  padding: 24px;
  margin: 17px 0px;
`;
