import React, { useState } from 'react';
import StyledText from 'src/components/Common/StyledText';
import VisitType from 'src/types/VisitType';
import Visit from './Visit';
import { List, Container, LineContainer, NoVisitsWrapper } from './styles';
import SVGLine from '../SVGLine';
import NoUpcomingVisits from '../NoUpcomingVisits';
import NoPastVisits from '../NoPastVisits';

interface Props {
  type: 'upcoming' | 'past';
  visits: VisitType[];
  textBelow: string;
  showMore: () => void;
}

const VisitsList: React.FC<Props> = (props) => {
  const { type, visits, textBelow, showMore } = props;
  const [isExpanded, _setIsExpanded] = useState(true);

  return (
    <Container>
      <LineContainer>
        <SVGLine />
      </LineContainer>
      <List $isExpanded={isExpanded}>
        {(!visits || visits.length === 0)
          ? (
            <NoVisitsWrapper>
              {type === 'upcoming'
              ? <NoUpcomingVisits />
              : <NoPastVisits />}
            </NoVisitsWrapper>
            )
          :
            visits.map((visit, index) => (
              <Visit
                docIcon={visit.docIcon}
                docSpec={visit.docSpec}
                docName={visit.docName}
                date={visit.date}
                time={visit.address.streetAddress}
                address={{
                  streetName: visit.address.streetName,
                  streetAddress: visit.address.streetAddress,
                }}
                visitStatus={visit.visitStatus}
                // eslint-disable-next-line react/no-array-index-key
                key={index}
              />
              ))}
        <StyledText text={textBelow} onClick={showMore} />
      </List>
    </Container>
  );
};

export default VisitsList;
