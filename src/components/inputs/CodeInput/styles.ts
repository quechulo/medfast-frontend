import styled from 'styled-components';
import { lightMode } from 'src/assets/theme';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 84px;
  height: 84px;
  font-size: 16px;
  text-align: center;
  margin: 0 5px;
  border: 1px solid ${lightMode.colors.mainGray};
  border-radius: 8px;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 41px;

  &:focus {
    border: 2px solid ${lightMode.colors.mainPurple};
  }

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }

`;
