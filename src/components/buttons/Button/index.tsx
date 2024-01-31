import React from 'react';
import Wrapper from './styles';

const Button: React.FC<{
  text: string;
  type?: 'button' | 'submit' | 'reset';
  isDark?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}> = (props) => {
  const { text, type, isDark, onClick } = props;

  return (
    <Wrapper
      $isDark={!!isDark}
      onClick={onClick}
      type={type}
    >
      {text}
    </Wrapper>
  );
};

Button.defaultProps = {
  isDark: false,
  type: 'button',
  onClick: () => {},
};

export default Button;
