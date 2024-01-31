import React from 'react';
import WhiteWrapper from './styles';

interface Props {
  text: string;
  onClick?: any;
}

const BigWhiteButton: React.FC< Props > = (props) => {
  const {
 text, onClick,
} = props;

  const handleClick = (e: any) => {
    e.preventDefault();
    onClick();
  };

  return (
    <WhiteWrapper
      onClick={handleClick}
    >
      {text}
    </WhiteWrapper>
  );
};

BigWhiteButton.defaultProps = {
  onClick: () => {},
};

export default BigWhiteButton;
