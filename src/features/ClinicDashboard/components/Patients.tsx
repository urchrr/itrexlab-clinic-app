import React from 'react';
import styled from 'styled-components';

import {
  ContentContainer,
  ContentHeaderTitle,
  ContentHeader,
} from 'features/ClinicDashboard/core/ContentStyles';
import StyledButton from 'features/ClinicDashboard/core/StyledButton';
import getCards from 'features/ClinicDashboard/services/getCards';
import PatientsCard from './Cards/PatientsCard';

import { ReactComponent as IconSearch } from '../images/icon-search.svg';

import SortSelector from './SortSelector/SortSelector';

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
          <PatientsCard key={index} {...card} />
        ))}
      </ContentContainer>
    </>
  );
};

export default Patients;
