import React from 'react'
import Select from 'react-select'

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: '#202225',
        fontWeight: '400',
        fontSize: '15px',
        lineHeight: '19px',
        paddingLeft: '24px',
        borderRadius: '6px',
        backgroundColor: state.isFocused ? '#F9FAFF' : 'transparent',
    }),
    control: (provided, state) => ({
        background: '#FFFFFF',
        borderRadius: '8px',
        border: '1px solid #DCE0EC',
        display: 'flex',
        boxShadow: '0 4px 32px rgba(218, 228, 255, 0.36)',
        // none of react-select's styles are passed to <Control />
    }),
    indicatorSeparator: (provided, state) => ({
        ...provided,
        display: 'none',
    }),
    input: (provided, state) => ({
        ...provided,
        margin: '0',
        padding: '0',
    }),
    menu: (provided, state) => ({
        ...provided,
        width: '100%',
        background: '#FFFFFF',
        borderRadius: '8px',
        marginTop: '4px',
        padding: '4px',
        height: '128px',
        overflowY: 'scroll',
    }),

    valueContainer: (provided, state) => ({
        ...provided,
        width: '100%',
        padding: '16px 24px',
        boxSizing: 'border-box',
        borderRadius: '8px 0 0 8px',
        fontSize: '17px',
        lineHeight: '24px',
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1
        const transition = 'opacity 300ms'

        return { ...provided, opacity, transition }
    },
}

export default customStyles
