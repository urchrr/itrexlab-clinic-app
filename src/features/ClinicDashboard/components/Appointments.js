import React from 'react'
import {
    ContentContainer,
    ContentHeaderTitle,
    ContentHeader,
} from '../core/ContentStyles'
import AppointmentsCard from './Cards/AppointmentsCard'
import SortSelector from './SortSelector/SortSelector'
import CreateButton from './CreateButton/CreateButton'
import getAppointments from '../services/getAppointments'

const Appointments = () => (
    <>
        <ContentHeader>
            <ContentHeaderTitle>My Appointments</ContentHeaderTitle>
            <SortSelector label={'Show:'} text={'Upcoming'} />
            <CreateButton />
        </ContentHeader>
        <ContentContainer>
            {getAppointments().map((card, index) => (
                <AppointmentsCard data={card} key={index} />
            ))}
        </ContentContainer>
    </>
)

export default Appointments
