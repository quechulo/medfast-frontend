import React from 'react';
import { RecommendationType } from 'src/types/RecomendationType';
import RecommendationItem from './RecommendationItem';
import Wrapper from './styles';

interface Props {
  recommendations: RecommendationType[];
}

const RecommendationsList: React.FC<Props> = (props) => {
  const { recommendations } = props;

  return (
    <Wrapper>
      {recommendations.map((item, index) => (
        <RecommendationItem
          title={item.title}
          description={item.description}
          iconLink={item.iconLink}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
        />
      ))}
    </Wrapper>
  );
};

export default RecommendationsList;
