import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: flex-start;
gap: 8px;
`;

export const CheckBoxLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: 1.25;
  letter-spacing: 0.25px;
`;

export const CheckBoxInput = styled.input`
  height: 24px;
  width: 24px;
  // border: 2px solid ${({ theme }) => theme.colors.mainYellow};
  // border-radius: 4px;
  &:checked {
    accent-color: ${({ theme }) => theme.colors.mainYellow};
  }
`;

export const SimpleSpan = styled.span`
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px;
`;

export const LinkSpan = styled.span`
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px;
text-decoration-line: underline;
color: ${({ theme }) => theme.colors.mainPurple};
&:hover {
  cursor: pointer;
}
`;
