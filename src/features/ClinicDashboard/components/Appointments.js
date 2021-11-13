import React from 'react'
import PropTypes from 'prop-types'
import {
    ContentContainer,
    ContentHeaderTitle,
    ContentHeader,
} from '../core/ContentStyles'
import AppointmentsCard from './Cards/AppointmentsCard'
import SortSelector from './SortSelector/SortSelector'
import CreateButton from './CreateButton/CreateButton'

const Appointments = ({ cards }) => (
    <>
        <ContentHeader>
            <ContentHeaderTitle>My Appointments</ContentHeaderTitle>
            <SortSelector />
            <CreateButton />
        </ContentHeader>
        <ContentContainer>
            {cards.map((card, index) => (
                <AppointmentsCard data={card} key={index} />
            ))}
        </ContentContainer>
    </>
)

Appointments.propTypes = {
    cards: PropTypes.array,
}

export default Appointments
