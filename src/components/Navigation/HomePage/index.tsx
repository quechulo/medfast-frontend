import React, { useState } from 'react';
import VisitType from 'src/types/VisitType';
import { RecommendationType } from 'src/types/RecomendationType';
import TeamDocItemType from 'src/types/TeamDocItemType';
import Tabs from './Tabs';
import SVGLine from './SVGLine';
import InsideTabHeader from './InsideTabHeader';
import VisitsList from './VisitsList';
import BottomContent from './BottomContent';
import { FirstSmallLine, Header, TabsWrapper, Wrapper } from './styles';

const HomePage = () => {
  const [selected, setSelected] = useState('visits');
  const handleVisitsClick = () => {
    setSelected('visits');
  };

  const handleTestsClick = () => {
    setSelected('tests');
  };

  const handlePrescriptionsClick = () => {
    setSelected('prescriptions');
  };

  const upcomingVisits: VisitType[] = [
    {
      docIcon: '/assets/images/docTestImg.jpg',
      docSpec: 'Psychologist',
      docName: 'Dr.Jhon Marks',
      date: 'tuesday - Jan 18, 2022',
      time: '9.00 - 10.00 am',
      address: {
        streetName: 'Beth Moses Hospital',
        streetAddress: '404 Hart Street',
      },
      visitStatus: 'Scheduled',
    },
  ];

  const pastVisits: VisitType[] = [
    {
      docIcon: '/assets/images/docTestImg.jpg',
      docSpec: 'Psychologist',
      docName: 'Dr.Jhon Marks',
      date: 'tuesday - Jan 18, 2022',
      time: '9.00 - 10.00 am',
      address: {
        streetName: 'Beth Moses Hospital',
        streetAddress: '404 Hart Street',
      },
      visitStatus: 'Scheduled',
    },
    {
      docIcon: '/assets/images/docTestImg.jpg',
      docSpec: 'Psychologist',
      docName: 'Dr.Jhon Marks',
      date: 'tuesday - Jan 18, 2022',
      time: '9.00 - 10.00 am',
      address: {
        streetName: 'Beth Moses Hospital',
        streetAddress: '404 Hart Street',
      },
      visitStatus: 'Scheduled',
    },
    {
      docIcon: '/assets/images/docTestImg.jpg',
      docSpec: 'Psychologist',
      docName: 'Dr.Jhon Marks',
      date: 'tuesday - Jan 18, 2022',
      time: '9.00 - 10.00 am',
      address: {
        streetName: 'Beth Moses Hospital',
        streetAddress: '404 Hart Street',
      },
      visitStatus: 'Completed',
    }
  ];

  const teamDocItems: TeamDocItemType[] = [
    {
      profileImg: '/assets/images/docTestImg.jpg',
      docName: 'Mike',
      docSpec: 'Psychologist',
    },
    {
      profileImg: '/assets/images/docTestImg.jpg',
      docName: 'Mike',
      docSpec: 'Good Dancer',
    },
    {
      profileImg: '/assets/images/docTestImg.jpg',
      docName: 'Alan',
      docSpec: 'Bad Dancer',
    },
  ];

  const recommendations: RecommendationType[] = [
    {
      title: 'Dental calculus prevention',
      description: 'Based on your visits, we recommend that you visit ghghr',
      iconLink: '/assets/icons/MLogo.svg',
    },
    {
      title: 'Dental calculus prevention',
      description: 'Based on your visits, we recommend that you visit ghghr',
      iconLink: '/assets/icons/MLogo.svg',
    },
  ];

  return (
    <Wrapper>
      <Header>Welcome to Medfast Hospital!</Header>
      <TabsWrapper>
        <Tabs
          isVisitsSelected={selected === 'visits'}
          isTestsSelected={selected === 'tests'}
          isPrescriptionsSelected={selected === 'prescriptions'}
          onVisitsClick={handleVisitsClick}
          onTestsClick={handleTestsClick}
          onPrescriptionsClick={handlePrescriptionsClick}
        />
      </TabsWrapper>
      {selected === 'visits' && (
        <>
          <FirstSmallLine>
            <SVGLine />
          </FirstSmallLine>
          <InsideTabHeader text="Upcoming visits" />
          <VisitsList
            type="upcoming"
            visits={upcomingVisits}
            textBelow="See more"
            showMore={() => console.log('see more clicked!')}
          />
          <InsideTabHeader text="Past visits" />
          <VisitsList
            type="past"
            visits={pastVisits}
            textBelow="Go to visits history"
            showMore={() => console.log('go to history clicked!')}
          />
          <BottomContent
            teamDocItems={teamDocItems}
            recommendations={recommendations}
          />
        </>
      )}

      {selected === 'tests' && <h3>TestSubPage</h3>}
      {selected === 'prescriptions' && <h3>PrescriptionsSubPage</h3>}
    </Wrapper>
  );
};

export default HomePage;
