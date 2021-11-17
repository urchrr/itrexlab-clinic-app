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
import { useNavigate } from 'react-router-dom'

const Appointments = () => {
    const navigate = useNavigate()
    return (
        <>
            <ContentHeader>
                <ContentHeaderTitle>My Appointments</ContentHeaderTitle>
                <SortSelector label={'Show:'} text={'Upcoming'} />
                <CreateButton
                    onClick={() => {
                        navigate('/clinic/create-appointment')
                    }}
                />
            </ContentHeader>
            <ContentContainer>
                {getAppointments().map((card, index) => (
                    <AppointmentsCard data={card} key={index} />
                ))}
            </ContentContainer>
        </>
    )
}

export default Appointments
