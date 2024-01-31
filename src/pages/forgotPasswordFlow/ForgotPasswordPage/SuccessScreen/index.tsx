import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import Logo from 'src/components/Logo';
import Button from 'src/components/buttons/Button';
import StyledLink from 'src/components/StyledLink/styles';
import {
  SectionWrapper,
  SectionLogoWrapper,
  SectionContentWrapper,
  SectionDescription,
  SectionTextUnderButton,
  SectionButtonWrapper,
} from 'src/layout/SliderLayout/Section/styles';
import CustomSectionDescriptionImage from './styles';

const SuccessScreen: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = (): void => {
    navigate('/', { replace: true });
  };

  return (
    <SectionWrapper>
      <SectionLogoWrapper>
        <Logo />
      </SectionLogoWrapper>

      <SectionContentWrapper>
        <SectionDescription>
          <CustomSectionDescriptionImage>
            <ReactSVG src="/assets/icons/successCheck.svg" />
          </CustomSectionDescriptionImage>
          <h2>Password reset</h2>
          <h4>
            Your password has been successfully reset.
            <br />
            Click below to log in
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

export default SuccessScreen;
