import React from 'react';
import { Wrapper, Container } from './styles';

interface Props {
  text: string;
  onClick?: any;
}

const StyledText: React.FC<Props> = (props) => {
  const { text, onClick } = props;

  const handleClick = (e: any) => {
    e.preventDefault();
    onClick(e);
  };

  return (
    <Container>
      <Wrapper onClick={handleClick}>{text}</Wrapper>
    </Container>
  );
};

StyledText.defaultProps = {
  onClick: () => {},
};

export default StyledText;
