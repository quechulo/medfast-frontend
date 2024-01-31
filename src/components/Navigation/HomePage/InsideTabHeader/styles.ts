import styled from 'styled-components';

export const Header = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.primaryText};
  line-height: 22px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -15px;
`;
