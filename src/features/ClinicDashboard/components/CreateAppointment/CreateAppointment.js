import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import {
    ContentContainer,
    ContentHeader,
    ContentHeaderTitle,
} from '../../core/ContentStyles'
import { useFormik } from 'formik'
import InputWrapper from './StyledInputWrapper'
import Selector from './StyledSelector'
import Calendar from 'react-calendar'
import './Calendar/Calendar.css'
import { ReactComponent as PrevIcon } from '../../images/angle-left-b.svg'
import { ReactComponent as NextIcon } from '../../images/angle-right-b.svg'
import TimeSlots from './TimeSlots/TimeSlots'
import * as constants from '../../../../services/constants'

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 104px;

    &:nth-of-type(3) {
        margin-right: 0;
    }
`
const sectionHeadingStyles = css`
    font-size: 17px;
    line-height: 24px;
    font-weight: normal;
    display: flex;
    align-items: center;
    color: #a1abc9;
`
const StyledHeading = styled.h3`
    ${sectionHeadingStyles};
    margin-bottom: 40px;
`

const StyledNumber = styled.span`
    ${sectionHeadingStyles};
    border: 1px solid #a1abc9;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    text-align: center;
    margin-right: 16px;
    justify-content: center;
`

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-right: 32px;
    overflow: hidden;
    height: calc(100% - 180px);
`

const StyledInput = styled.input`
    width: 100%;
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 32px rgba(218, 228, 255, 0.36);
    border: 1px solid #dce0ec;
    font-size: 17px;
    line-height: 24px;

    &::placeholder {
        color: #a1abc9;
    }
`

const StyledSubmitWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
`
const StyledSubmitButton = styled.button`
    cursor: pointer;
    border-radius: 8px;
    background: ${constants.blue};
    color: #ffffff;
    padding: 16px 25px 16px 24px;
    outline: none;
    border: none;
    width: 160px;
    height: 56px;
    font-size: 17px;
    line-height: 24px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;

    &:disabled {
        background: #dce0ec;
        cursor: default;
    }
`

const CreateAppointment = () => {
    const [time, setTime] = useState(null)
    const timeSlots = [
        { time: '12:00 am', inUse: false },
        { time: '1:00 pm', inUse: false },
        { time: '2:00 pm', inUse: true },
        { time: '3:00 pm', inUse: false },
        { time: '4:00 pm', inUse: false },
        { time: '5:00 pm', inUse: false },
    ]
    const formik = useFormik({})
    return (
        <>
            <ContentHeader>
                <ContentHeaderTitle>Make an appointment</ContentHeaderTitle>
            </ContentHeader>
            <StyledContainer>
                <StyledWrapper>
                    <StyledHeading>
                        <StyledNumber>1</StyledNumber>Select a doctor and define
                        the reason of your visit
                    </StyledHeading>
                    <InputWrapper label={'Occupation'}>
                        <Selector />
                    </InputWrapper>
                    <InputWrapper label={'Doctor`s name'}>
                        <Selector />
                    </InputWrapper>
                    <InputWrapper label={'Reason for the visit'}>
                        <StyledInput placeholder={'Reasons..'} />
                    </InputWrapper>
                    <InputWrapper label={'Note'}>
                        <StyledInput placeholder={'Leave a note if needed'} />
                    </InputWrapper>
                    {/*<StyledInput />*/}
                </StyledWrapper>
                <StyledWrapper>
                    <StyledHeading>
                        <StyledNumber>2</StyledNumber>Choose a day for an
                        appointment
                    </StyledHeading>
                    <Calendar
                        formatMonthYear={(local, date) =>
                            date.toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                            })
                        }
                        formatShortWeekday={(local, date) =>
                            date
                                .toLocaleDateString('en-US', {
                                    weekday: 'short',
                                })
                                .substring(0, 1)
                        }
                        prevLabel={<PrevIcon />}
                        nextLabel={<NextIcon />}
                    />
                </StyledWrapper>
                <StyledWrapper>
                    <StyledHeading>
                        <StyledNumber>3</StyledNumber>Select an available
                        timeslot
                    </StyledHeading>
                    <TimeSlots
                        data={timeSlots}
                        value={time}
                        onChange={(e) => {
                            setTime(e.target.value)
                        }}
                    />
                </StyledWrapper>
                <StyledSubmitWrapper>
                    <StyledSubmitButton>Submit</StyledSubmitButton>
                </StyledSubmitWrapper>
            </StyledContainer>
        </>
    )
}

export default CreateAppointment
