import React from 'react'
import StyledLink from "../core/StyledLink";
import {useNavigate} from "react-router-dom";

const NavigationLink = ({path, text}) => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(path)
    }
    return (
        <StyledLink onClick={handleNavigate}>{text}</StyledLink>
)
}

export default NavigationLink
