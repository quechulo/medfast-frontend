import React from 'react';
import { ReactSVG } from 'react-svg';
import { TextWrapper, Wrapper } from './styles';

const BackButton: React.FC<{
  text: string;
  onClick?: (e: React.MouseEvent) => void;
}> = (props) => {
  const { text, onClick } = props;

  const handleClick = (e: any) => {
    e.preventDefault();
    if (onClick) onClick(e);
  };

  return (
    <Wrapper onClick={handleClick}>
      <ReactSVG src="/assets/icons/arrowBack.svg" />
      <TextWrapper>{text}</TextWrapper>
    </Wrapper>
  );
};

BackButton.defaultProps = {
  onClick: () => {},
};

export default BackButton;
