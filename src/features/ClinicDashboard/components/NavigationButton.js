import React from 'react'

import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import StyledNavigationButton from '../core/StyledNavigationButton'

const NavigationButton = ({ path, title, isActive, action, name }) => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        action(name)
        navigate(path)
    }
    return (
        <StyledNavigationButton
            className={`${isActive ? 'active' : ''}`}
            onClick={handleNavigate}
        >
            {title}
        </StyledNavigationButton>
    )
}

NavigationButton.propTypes = {
    path: PropTypes.string,
    title: PropTypes.string,
    isActive: PropTypes.bool,
    action: PropTypes.func,
    name: PropTypes.string,
}

export default NavigationButton
