import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import PatientsCard from './Cards/PatientsCard'
import StyledControlButton from '../core/StyledControlButton'
import iconSearch from '../images/icon-search.svg'
import iconSettings from '../images/icon-settings.svg'
import {
    ContentContainer,
    ContentHeaderTitle,
    ContentHeader,
} from '../core/ContentStyles'

const SearchButton = styled(StyledControlButton)`
    background: url(${iconSearch}) no-repeat center;
`

const SettingsButton = styled(StyledControlButton)`
    background: url(${iconSettings}) no-repeat center;
`

const Patients = ({ cards }) => (
    <>
        <ContentHeader>
            <ContentHeaderTitle>My Patients</ContentHeaderTitle>
            <SearchButton />
            <SettingsButton />
        </ContentHeader>
        <ContentContainer>
            {cards.map((card, index) => (
                <PatientsCard key={index} data={card} />
            ))}
        </ContentContainer>
    </>
)
Patients.propTypes = {
    cards: PropTypes.array,
}
export default Patients
