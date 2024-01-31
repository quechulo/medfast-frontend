import React from 'react';
import TeamDocItem from '../TeamDocItem';
import { HorizontalLine, List } from './styles';

type TeamDocItemType = {
  profileImg: string;
  docName: string;
  docSpec: string;
};

interface Props {
  teamDocItems: TeamDocItemType[];
}

const TeamDocList: React.FC<Props> = (props) => {
  const { teamDocItems } = props;
  return (
    <List>
      {teamDocItems.map((item, index) => {
        if (index === teamDocItems.length - 1) {
          return (
            <TeamDocItem
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              profileImg={item.profileImg}
              docName={item.docName}
              docSpec={item.docSpec}
            />
          );
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            <TeamDocItem
              profileImg={item.profileImg}
              docName={item.docName}
              docSpec={item.docSpec}
            />
            <HorizontalLine />
          </div>
        );
      })}
    </List>
  );
};

export default TeamDocList;
