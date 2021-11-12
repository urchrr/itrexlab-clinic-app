import React from 'react'
import styled from 'styled-components'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import Card from './Cards/PatientsCard'
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
            {cards.map((card) => (
                <Card
                    key={nanoid()}
                    avatar={card.avatar}
                    status={card.status}
                    name={card.name}
                    result={card.result}
                    time={card.time}
                />
            ))}
        </ContentContainer>
    </>
)
Patients.propTypes = {
    cards: PropTypes.array,
}
export default Patients
