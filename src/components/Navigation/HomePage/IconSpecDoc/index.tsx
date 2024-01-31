import React from 'react';
import {
  DocName,
  DocSpec,
  IconSpecDocNameWrapper,
  ProfileImage,
} from './styles';

interface Props {
  profileImg: string;
  docSpec: string;
  docName: string;
}

const IconSpecDoc: React.FC<Props> = (props) => {
  const { profileImg, docSpec, docName } = props;

  return (
    <IconSpecDocNameWrapper>
      <ProfileImage $profileImg={profileImg} />
      <DocSpec>{docSpec}</DocSpec>
      <DocName>{docName}</DocName>
    </IconSpecDocNameWrapper>
  );
};

export default IconSpecDoc;
