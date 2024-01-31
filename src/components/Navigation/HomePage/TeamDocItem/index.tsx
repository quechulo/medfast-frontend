import React from 'react';
import { ReactSVG } from 'react-svg';
import { GradientCircle, Wrapper } from './styles';
import IconSpecDoc from '../IconSpecDoc';

interface Props {
  profileImg: string;
  docName: string;
  docSpec: string;
}

const TeamDocItem: React.FC<Props> = (props) => {
  const { profileImg, docName, docSpec } = props;

  return (
    <Wrapper>
      <IconSpecDoc
        profileImg={profileImg}
        docName={docName}
        docSpec={docSpec}
      />
      <GradientCircle>
        <ReactSVG src="/assets/icons/arrowRightWhite.svg" />
      </GradientCircle>
    </Wrapper>
  );
};

export default TeamDocItem;
