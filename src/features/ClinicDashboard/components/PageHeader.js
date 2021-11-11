import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import logo from '../images/logo.png'
import * as constants from '../services/constants'
import StyledStatusIndicator from '../core/StyledStatusIndicator'
import userRoles from '../../UserAuth/services/userRoles'
import userStatuses from '../../UserAuth/services/userStatuses'

const StyledHeader = styled.header`
    display: flex;
    padding: 16px 24px;
    justify-content: space-between;
    align-items: center;
    @media only screen and (min-width: 560px) {
        padding: 0;
    }
`
const StyledHeaderLogo = styled.img`
    width: 132px;
    height: 32px;
`
const StyledHeaderUserArea = styled.div`
    position: relative;
    height: 40px;
    display: grid;
    grid-template-columns: auto 40px;
    grid-template-rows: repeat(2, 20px);
    grid-gap: 4px 16px;
    grid-template-areas:
        'name avatar'
        'role avatar';
`

const StyledUserAvatar = styled.img`
    border-radius: 50%;
    grid-area: avatar;
`

const StyledUserStatusIndicator = styled(StyledStatusIndicator)`
    position: absolute;
    top: -3px;
    right: -3px;
    z-index: 1;
    border: 3px solid ${constants.lightBlue};
    box-sizing: content-box;
`
const StyledHeaderText = styled.p`
    font-weight: 500;
    align-self: center;
    text-overflow: ellipsis;
    text-align: right;
    white-space: nowrap;
`

const StyledUserName = styled(StyledHeaderText)`
    font-weight: 600;
    font-size: 15px;
    line-height: 19px;
    text-align: right;
    color: ${constants.darkGrey};
    grid-area: name;
`

const StyledUserRole = styled(StyledHeaderText)`
    font-size: 13px;
    line-height: 17px;
    color: ${constants.grey};
    grid-area: role;
`

const ClinicHeader = ({ user: { avatar, name, role, status } }) => (
    <StyledHeader>
        <StyledHeaderLogo src={logo} alt="logo" />
        <StyledHeaderUserArea>
            <StyledUserName>{name}</StyledUserName>
            <StyledUserRole>{userRoles[role]}</StyledUserRole>
            <StyledUserStatusIndicator className={userStatuses[status]} />
            <StyledUserAvatar src={avatar} alt={`${name}-avatar`} />
        </StyledHeaderUserArea>
    </StyledHeader>
)

ClinicHeader.propTypes = {
    user: PropTypes.object,
    avatar: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.number,
    status: PropTypes.number,
}

export default ClinicHeader
