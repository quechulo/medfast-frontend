import React from 'react';
import { ReactSVG } from 'react-svg';
import {
  OutlinedWrapper,
  SolidWrapper,
  RedOutlinedWrapper,
  TextWrapper,
  IconWrapper,
  Text,
} from './styles';

interface IconButtonProps {
  variant: 'outlined' | 'solid' | 'text' | 'redOutlined';
  text?: string;
  leadingIcon?: string;
  trailingIcon?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  variant,
  text,
  leadingIcon,
  trailingIcon,
  onClick,
}) => {
  let ButtonWrapper;

  switch (variant) {
    case 'outlined':
      ButtonWrapper = OutlinedWrapper;
      break;
    case 'solid':
      ButtonWrapper = SolidWrapper;
      break;
    case 'redOutlined':
      ButtonWrapper = RedOutlinedWrapper;
      break;
    case 'text':
      ButtonWrapper = TextWrapper;
      break;
    default:
      ButtonWrapper = SolidWrapper;
  }

  return (
    <ButtonWrapper onClick={onClick} $variant={variant}>
      {leadingIcon && (
        <IconWrapper>
          <ReactSVG src={leadingIcon} />
        </IconWrapper>
      )}

      {text && <Text>{text}</Text>}

      {trailingIcon && (
        <IconWrapper>
          <ReactSVG src={trailingIcon} />
        </IconWrapper>
      )}
    </ButtonWrapper>
  );
};

export default IconButton;
