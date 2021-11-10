import React from 'react'

import {useNavigate} from "react-router-dom";
import StyledNavigationButton from "../core/StyledNavigationButton";

const NavigationButton = ({path, title, isActive, action, name}) => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        action(name)
        navigate(path)
    }
    return (
        <StyledNavigationButton className={`${isActive ? 'active' : ''}`}
                                onClick={handleNavigate}>
            {title}
        </StyledNavigationButton>
    )
}

export default NavigationButton
