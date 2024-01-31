import React from 'react';
import { ReactSVG } from 'react-svg';
import {
  Wrapper,
  SearchBarWrapper,
  SearchBarIcon,
  SearchBarInput,
} from './styles';

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => (
  <Wrapper>
    <SearchBarWrapper>
      <SearchBarIcon htmlFor="search">
        <ReactSVG src="/assets/icons/search.svg" />
      </SearchBarIcon>
      <SearchBarInput
        id="search"
        type="text"
        placeholder="Find a doctor or service"
        autoComplete="off"
      />
    </SearchBarWrapper>
    {/* // TODO: Implement search results in seperate ticket */}
    {/* <div className="searchResults"></div> */}
  </Wrapper>
);

export default SearchBar;
