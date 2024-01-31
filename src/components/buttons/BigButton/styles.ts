import styled from 'styled-components';
import { lightMode } from 'src/assets/theme';

const Wrapper = styled.button<{ $isDisable: boolean }>`
  font-weight: 700;
  font-size: ${lightMode.fontSize.large};
  width: 100%;
  height: 100%;
  display: flex;
  padding: 18px 32px;
  justify-content: center;
  align-items: center;
  border: 0px solid;
  border-radius: 8px;
  line-height: 20px;
  gap: 4px;
  color: ${lightMode.colors.mainWhite};
  background: ${({ $isDisable }) => ($isDisable ? 'linear-gradient(180deg, rgba(128, 128, 128, 0.20) 0%, rgba(204, 204, 204, 0.20) 71.15%), #D4D3D3' : 'linear-gradient(184deg, rgba(29, 26, 152, 0.20) 14.71%, rgba(0, 0, 0, 0.00) 73.29%), #7A77FF')};

  &:hover {
    background: ${({ $isDisable }) => ($isDisable ? 'linear-gradient(180deg, rgba(128, 128, 128, 0.20) 0%, rgba(204, 204, 204, 0.20) 71.15%), #D4D3D3' : 'linear-gradient(180deg, rgba(11, 11, 40, 0.20) 19.64%, rgba(255, 255, 255, 0.00) 91.07%), #5F5CDB')};
  }
  &:focus {
    outline: none;
  }
`;

export default Wrapper;
