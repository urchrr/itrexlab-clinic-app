import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import CardToggleButton from '../CardToogleButton'
import {
    Card,
    CardAvatar,
    CardCaseArea,
    CardCaseHighlightedText,
    CardCaseText,
    CardSettings,
    CardSettingsButton,
    CardSettingsDeleteButton,
    CardStatusDescription,
    CardTitle,
    CardUserArea,
    StyledIconClock,
    StyledIconHeart,
} from './CardStyles'

const AppointmentUserArea = styled(CardUserArea)`
    grid-template-areas:
        'avatar title title button'
        'avatar status status button';
`

const AppointmentsCard = ({
    data: { avatar, name, specialist, time, symptoms },
}) => {
    const [isShow, setShow] = useState(false)

    const handleShowSettings = () => {
        setShow(!isShow)
    }
    const doctor = {
        1: 'Therapist',
    }
    return (
        <Card>
            <AppointmentUserArea>
                <CardAvatar src={avatar} alt="avatar" />
                <CardTitle>{name}</CardTitle>
                <CardStatusDescription>
                    {doctor[specialist]}
                </CardStatusDescription>
                <CardToggleButton onClick={handleShowSettings} />
                <CardSettings visible={isShow}>
                    <CardSettingsButton>Create a resolution</CardSettingsButton>
                    <CardSettingsButton>Edit an appointment</CardSettingsButton>
                    <CardSettingsDeleteButton>Delete</CardSettingsDeleteButton>
                </CardSettings>
            </AppointmentUserArea>
            <CardCaseArea>
                <StyledIconClock />
                <CardCaseHighlightedText>{time}</CardCaseHighlightedText>
                {symptoms && (
                    <>
                        <StyledIconHeart />
                        <CardCaseText>{symptoms}</CardCaseText>
                    </>
                )}
            </CardCaseArea>
        </Card>
    )
}

AppointmentsCard.propTypes = {
    data: PropTypes.object,
    avatar: PropTypes.string,
    name: PropTypes.string,
    specialist: PropTypes.number,
    time: PropTypes.string,
    symptoms: PropTypes.string,
}

export default AppointmentsCard
