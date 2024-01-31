import React from 'react';
import { ReactSVG } from 'react-svg';
import { RecommendationType } from 'src/types/RecomendationType';
import { Description, IconWrapper, SubWrapper, Title, Wrapper } from './styles';

const RecommendationItem: React.FC<RecommendationType> = (props) => {
  const { title, description, iconLink } = props;

  return (
    <Wrapper>
      <SubWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </SubWrapper>
      <IconWrapper>
        <ReactSVG
          src={iconLink}
          beforeInjection={(svg) => {
            svg.setAttribute('style', 'height: auto; width: 80px;');
          }}
        />
      </IconWrapper>
    </Wrapper>
  );
};

export default RecommendationItem;
