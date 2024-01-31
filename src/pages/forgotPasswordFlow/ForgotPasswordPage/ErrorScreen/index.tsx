import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import Logo from 'src/components/Logo';
import StyledLink from 'src/components/StyledLink/styles';
import Button from 'src/components/buttons/Button';
import {
  SectionWrapper,
  SectionLogoWrapper,
  SectionContentWrapper,
  SectionDescription,
  SectionTextUnderButton,
  SectionButtonWrapper,
} from 'src/layout/SliderLayout/Section/styles';
import CustomSectionDescriptionImage from './styles';

const ErrorScreen: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = (): void => {
    navigate('/forgot-password', { replace: true });
  };

  return (
    <SectionWrapper>
      <SectionLogoWrapper>
        <Logo />
      </SectionLogoWrapper>

      <SectionContentWrapper>
        <SectionDescription>
          <CustomSectionDescriptionImage>
            <ReactSVG src="/assets/icons/error.svg" />
          </CustomSectionDescriptionImage>
          <h2>Password reset error</h2>
          <h4>
            Sorry, couldn't reset your password.
            <br />
            Click below to try again.
          </h4>
        </SectionDescription>

        <SectionButtonWrapper>
          <Button type="button" text="Continue" onClick={handleClick} />
        </SectionButtonWrapper>

        <SectionTextUnderButton>
          <h5>Back to</h5>
          <StyledLink to="/" $fWeight={400} replace>
            Sign In
          </StyledLink>
        </SectionTextUnderButton>
      </SectionContentWrapper>
    </SectionWrapper>
  );
};

export default ErrorScreen;
