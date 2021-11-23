import React from 'react';
import styled from 'styled-components';

import PatientsCard from './Cards/PatientsCard';

import { ReactComponent as IconSearch } from '../images/icon-search.svg';

import {
  ContentContainer,
  ContentHeaderTitle,
  ContentHeader,
} from '../core/ContentStyles';
import SortSelector from './SortSelector/SortSelector';
import StyledButton from '../core/StyledButton';
import getCards from '../services/getCards';

const StyledIconSearch = styled(IconSearch)`
  margin-right: 10px;
`;

const StyledSearchButton = styled(StyledButton)`
  color: #a1abc9;

  &:last-of-type {
    margin-right: 48px;
  }
`;

const SearchButton = function () {
  return (
    <StyledSearchButton>
      <StyledIconSearch />
      Search
    </StyledSearchButton>
  );
};

const Patients = function () {
  return (
    <>
      <ContentHeader>
        <ContentHeaderTitle>My Patients</ContentHeaderTitle>
        <SearchButton />
        <SortSelector label="Sort by:" text="Date" />
      </ContentHeader>
      <ContentContainer>
        {getCards().map((card, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <PatientsCard key={index} data={card} />
        ))}
      </ContentContainer>
    </>
  );
};

export default Patients;
