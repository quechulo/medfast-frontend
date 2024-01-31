import styled from 'styled-components';
import { lightMode } from 'src/assets/theme';

const WhiteWrapper = styled.button`
  font-weight: 700;
  font-size: ${lightMode.fontSize.large};
  width: 100%;
  height: 100%;
  display: flex;
  padding: 18px 32px;
  justify-content: center;
  align-items: center;
  border: 2px solid ${lightMode.colors.mainPurple};
  border-radius: 8px;
  line-height: 20px;
  gap: 4px;
  color: ${lightMode.colors.mainPurple};
  background: ${lightMode.colors.mainWhite};
  `;

export default WhiteWrapper;
