import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 464px;
`
const StyledInput = styled.input`
    visibility: hidden;
`
const StyledLabel = styled.label`
    display: flex;
    cursor: ${(props) => (props.inUse ? 'default' : 'pointer')};
    border-radius: 8px;
    box-shadow: ${(props) =>
        props.inUse ? 'none' : '0 4px 32px rgba(218, 228, 255, 0.54)'};
    width: 104px;
    height: 40px;
    align-items: center;
    justify-content: center;
    background: ${(props) => (props.inUse ? '#DCE0EC' : '#FFFFFF')};
    border: ${(props) => (props.checked ? '1px solid #7297FF' : 'none')};
    color: ${(props) => {
        if (props.inUse) {
            return '#F9FAFF'
        }
        if (!props.inUse && props.checked) {
            return '#7297FF'
        } else {
            return '#202225'
        }
    }};
`
const StyledInputWrapper = styled.div`
    margin-right: 16px;

    &:nth-of-type(4) {
        margin-right: 0;
    }
`

function TimeSlots({ data, value, onChange }) {
    return (
        <>
            <StyledWrapper>
                {data.map(({ time, inUse }) => (
                    <StyledInputWrapper key={time}>
                        <StyledLabel
                            htmlFor={time}
                            checked={time === value}
                            inUse={inUse}
                        >
                            {time}
                        </StyledLabel>
                        <StyledInput
                            id={time}
                            type={'radio'}
                            name={'time'}
                            value={time}
                            onChange={onChange}
                            disabled={inUse}
                            checked={time === value}
                        />
                    </StyledInputWrapper>
                ))}
            </StyledWrapper>
        </>
    )
}

export default TimeSlots
