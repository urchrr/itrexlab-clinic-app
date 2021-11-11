import React from 'react'
import styled from 'styled-components'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import Card from './Card'
import ContentHeaderHoc from './ContentHeaderHoc'
import StyledControlButton from '../core/StyledControlButton'
import iconSearch from '../images/icon-search.svg'
import iconSettings from '../images/icon-settings.svg'
import ContentContainer from './ContentContainer'

const SearchButton = styled(StyledControlButton)`
    background: url(${iconSearch}) no-repeat center;
`

const SettingsButton = styled(StyledControlButton)`
    background: url(${iconSettings}) no-repeat center;
`

const Patients = ({ cards }) => (
    <>
        <ContentHeaderHoc title={'My Patients'}>
            <SearchButton />
            <SettingsButton />
        </ContentHeaderHoc>
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
