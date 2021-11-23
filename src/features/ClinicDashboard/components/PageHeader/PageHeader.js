import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo.png';
import userStatuses from '../../../UserAuth/services/userStatuses';
import {
  StyledHeaderLogo,
  StyledHeaderUserArea,
  StyledUserAvatar,
  StyledUserName,
  StyledUserRole,
  StyledHeader,
  StyledUserStatusIndicator,
} from './PageHeaderStyles';

const ClinicHeader = function ({
  user: {
    avatar, name, role, status,
  },
}) {
  return (
    <StyledHeader>
      <StyledHeaderLogo src={logo} alt="logo" />
      <StyledHeaderUserArea>
        <StyledUserName>{name}</StyledUserName>
        <StyledUserRole>
          {role.charAt(0).toUpperCase() + role.slice(1)}
        </StyledUserRole>
        <StyledUserStatusIndicator color={userStatuses[status]} />
        <StyledUserAvatar src={avatar} alt={`${name}-avatar`} />
      </StyledHeaderUserArea>
    </StyledHeader>
  );
};

ClinicHeader.propTypes = {
  user: PropTypes.object,
  avatar: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.number,
  status: PropTypes.number,
};

export default ClinicHeader;
