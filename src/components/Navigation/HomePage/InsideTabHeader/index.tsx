import React from 'react';
import { ReactSVG } from 'react-svg';
import { ArrowWrapper, Header, IconWrapper, Wrapper } from './styles';

interface Props {
  text: string;
}

const InsideTabHeader: React.FC<Props> = (props) => {
  const { text } = props;

  return (
    <Wrapper>
      <IconWrapper>
        <ReactSVG src="/assets/icons/dotSVG.svg" />
      </IconWrapper>
      <Header>{text}</Header>
      <ArrowWrapper>
        <ReactSVG src="/assets/icons/arrowDownIcon.svg" />
      </ArrowWrapper>
    </Wrapper>
  );
};

export default InsideTabHeader;
