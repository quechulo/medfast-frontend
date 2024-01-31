import React from 'react';
import { ReactSVG } from 'react-svg';
import { useNavigate } from 'react-router-dom';

import BigButton from 'src/components/buttons/BigButton';
import {
  CenteredDiv,
  ContentDiv,
  Title,
  InfoText,
  MedfastLogoBig,
} from './styles';

const RegistrationSuccess: React.FC<{
  // children?: React.ReactNode;
}> = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
    // TODO change to proper link with sign-in
  };

  return (
    <CenteredDiv>
      <ContentDiv>
        <Title>
          Please confirm
          <br />
          your email address
        </Title>
        <InfoText>
          Thanks for signing up to Medfast. We’re happy to have you with us.
          <br />
          Please check your email to verify your account
        </InfoText>
        <BigButton
          text="Go to sign in"
          isDisable={false}
          onClick={handleClick}
        />
      </ContentDiv>
      <MedfastLogoBig>
        <ReactSVG src="/assets/icons/bigLogo.svg" />
      </MedfastLogoBig>
    </CenteredDiv>
  );
};
export default RegistrationSuccess;
