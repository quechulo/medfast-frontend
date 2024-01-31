import React from 'react';
import Wrapper from './styles';

const BigButton: React.FC<{
  text: string;
  type?: 'button' | 'submit' | 'reset';
  isDisable: boolean;
  onClick?: any;
}> = (props) => {
  const { text, type, isDisable, onClick } = props;

  const handleClick = (e: any) => {
    e.preventDefault();
    if (!isDisable) {
      onClick(e);
    }
  };
  return (
    <Wrapper $isDisable={isDisable} type={type} onClick={handleClick}>
      {text}
    </Wrapper>
  );
};

BigButton.defaultProps = {
  type: 'button',
  onClick: () => {},
};

export default BigButton;
