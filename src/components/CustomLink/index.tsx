import React from 'react';
import StyledLink from './styles';

interface CustomLinkProps {
  text: string;
  destination: string;
  fWeight?: number;
  fSize?: number;
  fColor?: string;
  hoverColor?: string;
}

const CustomLink: React.FC<CustomLinkProps> = (props) => {
  const {
 text, destination, fWeight, fSize, fColor, hoverColor
} = props;

  return (
    <StyledLink
      to={destination}
      $fWeight={fWeight}
      $fSize={fSize}
      $fColor={fColor}
      $hoverColor={hoverColor}
    >
      {text}
    </StyledLink>
  );
};

CustomLink.defaultProps = {
  fWeight: undefined,
  fSize: undefined,
  fColor: undefined,
  hoverColor: undefined,
};

export default CustomLink;
