import React from 'react'
import { nanoid } from 'nanoid'

import PropTypes from 'prop-types'
import {
    ContentContainer,
    ContentHeaderTitle,
    ContentHeader,
} from '../core/ContentStyles'
import AppointmentsCard from './Cards/AppointmentsCard'
import SortSelector from './SortSelector/SortSelector'
import CreateButton from './CreateButton/CreateButton'

const key = nanoid()

const Appointments = ({ cards }) => {
    return (
        <>
            <ContentHeader>
                <ContentHeaderTitle>My Patients</ContentHeaderTitle>
                <SortSelector />
                <CreateButton />
            </ContentHeader>
            <ContentContainer>
                {cards.map((card) => (
                    <AppointmentsCard data={card} key={key} />
                ))}
            </ContentContainer>
        </>
    )
}

Appointments.propTypes = {
    cards: PropTypes.array,
}

export default Appointments
