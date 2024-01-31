import React from 'react';
import StyledText from 'src/components/Common/StyledText';
import TeamDocItemType from 'src/types/TeamDocItemType';
import { RecommendationType } from 'src/types/RecomendationType';
import TeamDocList from '../TeamDocList';
import {
  BottomHeader,
  Column,
  GridContainer,
  GridItemRight,
  GridItemLeft,
} from './styles';
import RecommendationsList from '../RecommendationsList';
import NoCareTeam from '../NoCareTeam';

interface Props {
  teamDocItems: TeamDocItemType[];
  recommendations: RecommendationType[];
}

const BottomContent: React.FC<Props> = (props) => {
  const { teamDocItems, recommendations } = props;

  return (
    <GridContainer>
      <Column>
        <BottomHeader>
          Your care
          team
        </BottomHeader>
        <GridItemLeft>
          {(!teamDocItems || teamDocItems.length === 0)
          ? (<NoCareTeam />)
          : (<TeamDocList teamDocItems={teamDocItems} />)}
        </GridItemLeft>
        <StyledText text="See more" onClick={() => {}} />
      </Column>
      <Column>
        <BottomHeader>Recommendations</BottomHeader>
        <GridItemRight>
          <RecommendationsList
            recommendations={recommendations}
          />
        </GridItemRight>
        <StyledText text="See more" onClick={() => {}} />
      </Column>
    </GridContainer>
  );
};

export default BottomContent;
