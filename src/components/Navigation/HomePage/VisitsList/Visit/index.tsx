import React from 'react';
import { ReactSVG } from 'react-svg';
import VisitType from 'src/types/VisitType';
import {
  Address,
  Container,
  DocName,
  DocSpec,
  IconSpecDocName,
  IconWrapper,
  ProfileImage,
  Status,
  TextSubWrapper,
  Time,
} from './styles';
import StatusIcon from './StatusIcon';

const Visit: React.FC<VisitType> = (props) => {
  const { docIcon, docSpec, docName, date, time, address, visitStatus } = props;

  return (
    <Container>
      <IconSpecDocName>
        <ProfileImage $profileImg={docIcon} />
        <DocSpec>{docSpec}</DocSpec>
        <DocName>{docName}</DocName>
      </IconSpecDocName>
      <Time>
        <ReactSVG src="/assets/icons/timeVisitIcon.svg" />
        <TextSubWrapper>
          <span>{date}</span>
          <span>{time}</span>
        </TextSubWrapper>
      </Time>
      <Address>
        <ReactSVG src="/assets/icons/addressVisitIcon.svg" />
        <TextSubWrapper>
          <span>{address.streetName}</span>
          <span>{address.streetAddress}</span>
        </TextSubWrapper>
      </Address>
      <Status>
        <StatusIcon
          fill={
            // eslint-disable-next-line no-nested-ternary
            visitStatus === 'Completed'
              ? '#9a9a9a'
              // eslint-disable-next-line no-nested-ternary
              : visitStatus === 'Scheduled'
                ? '#27AE60'
              : visitStatus === 'In-Consultation'
                ? '#8e68f3'
                : '#FBBC41'
          }
        />
        <span>{visitStatus}</span>
      </Status>
      <IconWrapper>
        <ReactSVG src="/assets/icons/threeVerticalDots.svg" />
      </IconWrapper>
    </Container>
  );
};

export default Visit;
