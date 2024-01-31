import React from 'react';
import { ReactSVG } from 'react-svg';
import SearchBar from 'src/components/SearchBar';
import IconButton from 'src/components/buttons/IconButton';
import {
  Wrapper,
  SearchWrapper,
  ContentWrapper,
  ButtonWrapper,
  HeaderIconWrapper,
  HeaderIcon,
  HeaderIconBadge,
  PersonWrapper,
  PersonImageWrapper,
  PersonName,
} from './styles';

const Header: React.FC = () => (
  <Wrapper>
    <SearchWrapper>
      <SearchBar />
    </SearchWrapper>
    <ContentWrapper>
      <ButtonWrapper>
        <IconButton
          variant="solid"
          text="New appointment"
          leadingIcon="/assets/icons/plus.svg"
        />
      </ButtonWrapper>
      <HeaderIconWrapper>
        <HeaderIcon>
          <HeaderIconBadge />
          <ReactSVG src="/assets/icons/notification.svg" />
        </HeaderIcon>
      </HeaderIconWrapper>
      <PersonWrapper>
        <PersonImageWrapper>
          <img src="/assets/images/avatar.png" alt="Kitten" />
        </PersonImageWrapper>
        <PersonName>Melissa Nicholson-Nicholson</PersonName>
      </PersonWrapper>
    </ContentWrapper>
  </Wrapper>
);

export default Header;
