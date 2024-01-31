import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from 'src/components/Logo';
import { LogoWrapper } from 'src/components/Logo/style';
import BackButton from 'src/components/buttons/BackButton';
import {
  Body,
  ContentContainer,
  ContentDiv,
  Header,
  Timestamp,
  TopContainer,
} from './styles';

const TermsAndConditions: React.FC = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate('/registration');
  };

  return (
    <>
      <TopContainer>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </TopContainer>
      <TopContainer>
        <BackButton text="Back to Sign In" onClick={handleGoBack} />
      </TopContainer>

      <ContentDiv>
        <ContentContainer>
          <Header>Terms and Conditions</Header>
          <Body>
            1. General Provisions
            <br />
            <br />
            1.1. Taking into account that the VK Ecosystem is a common space for
            interaction between users, Services and specialized tools designed
            to improve the usability of the Services familiar to users,
            VKontakte LLC (OGRN 1079847035179, location address: 191024, St.
            Petersburg, Khersonskaya st., 12-14, lit. A, room 1-H), hereinafter
            also referred to as the "Company", "we", "our" or "us", has
            developed and posted this User Agreement (hereinafter referred to as
            this Agreement), which applies to all persons using any of the VK
            Ecosystem Services and/or VK Ecosystem tools.
            <br />
            1.2. This Agreement may be amended and/or supplemented by the
            Company unilaterally. This Agreement is an open and public document.
            The current version of this Agreement is available at:
            https://id.vk.com/terms. The Company recommends that Users regularly
            check the terms of this Agreement for changes and / or additions.
            Continued use of the VK Ecosystem Services and/or VK Ecosystem tools
            by the User after making changes and/or additions to this Agreement
            means the User's acceptance and consent to such changes and/or
            additions.
            <br />
            1.3. Relations between the Parties are also governed by the Rules
            for protecting information about Users of the VK Ecosystem, which
            are located at https://id.vk.com/privacy, and the User Documentation
            of the relevant Services in which the User registers using the VK ID
            tool.
            <br />
            <br />
            2. Subject of the Agreement
            <br />
            <br />
            2.1. Under the terms of this Agreement, the Company provides the
            User with the following accesses, opportunities and benefits free of
            charge:
            <br />
            2.1.1. Secure management of registration data through the personal
            account of a single account of the VK Ecosystem User;
            <br />
            2.1.2. A set of tools that are functionally integrated into the
            Services through technical integration and allow making the daily
            use of the usual Services as convenient and safe as possible for the
            User and his data, including, but not limited to:
            <br />
            VK ID tool - a tool for simplified quick registration and / or
            authorization of Users in the VK Ecosystem Services, as well as in
            other Services / Sites / information resources of third parties
            (hereinafter referred to as external Services), collectively
            referred to as the "Services";
            <br />
            widgets that allow you to receive timely and personalized
            information;
            <br />
            VK Mini Apps platform for quick access to the Services;
            <br />
            VK Pay for secure payments;
          </Body>
          <Timestamp>Last updated: May 12, 2022</Timestamp>
        </ContentContainer>
      </ContentDiv>
    </>
  );
};

export default TermsAndConditions;
