import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Text = styled.h4`
  max-width: 270px;
  color: ${({ theme }) => theme.colors.primaryText};
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;

  font-size: ${({ theme }) => theme.fontSize.large};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 22px;
`;
