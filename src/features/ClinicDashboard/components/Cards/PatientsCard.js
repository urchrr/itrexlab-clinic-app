import React, { useState } from 'react'
import PropTypes from 'prop-types'
import caseStatuses from '../../services/caseStatuses'
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
    CardStatusIndicator,
    CardTitle,
    CardUserArea,
    StyledIconClipboard,
    StyledIconClock,
} from './CardStyles'

const CaseCard = ({ avatar, name, status, time, result }) => {
    const [isShow, setShow] = useState(false)

    const handleShowSettings = () => {
        setShow(!isShow)
    }

    return (
        <Card>
            <CardUserArea>
                <CardAvatar src={avatar} alt="avatar" />
                <CardTitle>{name}</CardTitle>
                <CardStatusIndicator color={caseStatuses[status].color} />
                <CardStatusDescription>
                    {caseStatuses[status].text}
                </CardStatusDescription>
                <CardToggleButton onClick={handleShowSettings} />
                <CardSettings visible={isShow}>
                    <CardSettingsButton>Create a resolution</CardSettingsButton>
                    <CardSettingsButton>Edit an appointment</CardSettingsButton>
                    <CardSettingsDeleteButton>Delete</CardSettingsDeleteButton>
                </CardSettings>
            </CardUserArea>
            <CardCaseArea>
                <StyledIconClock />
                <CardCaseHighlightedText>{time}</CardCaseHighlightedText>
                {result && (
                    <>
                        <StyledIconClipboard />
                        <CardCaseText>{result}</CardCaseText>
                    </>
                )}
            </CardCaseArea>
        </Card>
    )
}

CaseCard.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.number,
    time: PropTypes.string,
    result: PropTypes.string,
}

export default CaseCard
