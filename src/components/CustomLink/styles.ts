import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface StyledLinkProps {
  $fWeight?: number;
  $fSize?: number;
  $fColor?: string;
  $hoverColor?: string;
}

const StyledLink = styled(Link)<StyledLinkProps>`
  display: flex;
  text-decoration: none;
  align-items: center;
  line-height: 20px;
  font-weight: ${(props) => props.$fWeight || props.theme.fontWeight.medium};
  font-size: ${(props) => props.$fSize || props.theme.fontSize.md};
  color: ${(props) => props.$fColor || props.theme.colors.mainPurple};
  &:hover {
    color: ${(props) => props.$hoverColor || '#7A77FF'};
  }
`;

export default StyledLink;
