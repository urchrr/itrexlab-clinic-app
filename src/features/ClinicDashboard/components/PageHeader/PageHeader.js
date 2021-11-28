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
    avatar, firstName, secondName, role, status = 1,
  },
}) {
  const name = `${firstName} ${secondName}`;

  return (
    <StyledHeader>
      <StyledHeaderLogo src={logo} alt="logo" />
      <StyledHeaderUserArea>
        <StyledUserName>{name}</StyledUserName>
        <StyledUserRole>
          {role}
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
  firstName: PropTypes.string,
  secondName: PropTypes.string,
  role: PropTypes.string,
  status: PropTypes.number,
};

export default ClinicHeader;
