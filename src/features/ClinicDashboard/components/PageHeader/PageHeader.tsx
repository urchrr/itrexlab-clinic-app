import React from 'react';
import { userDataSelector } from 'services/redux/user/selectors';
import UserStatuses from 'features/UserAuth/services/userStatuses';
import { useAppSelector } from 'services/redux/hooks/useAppSelector';
import logo from '../../images/logo.png';
import {
  StyledHeaderLogo,
  StyledHeaderUserArea,
  StyledUserAvatar,
  StyledUserName,
  StyledUserRole,
  StyledHeader,
  StyledUserStatusIndicator,
} from './PageHeaderStyles';

const ClinicHeader = function () {
  const {
    avatar, firstName, lastName, role, status,
  } = useAppSelector(userDataSelector);

  const name = `${firstName} ${lastName}`;
  return (
    <StyledHeader>
      <StyledHeaderLogo src={logo} alt="logo" />
      <StyledHeaderUserArea>
        <StyledUserName>{name}</StyledUserName>
        <StyledUserRole>
          {role}
        </StyledUserRole>
        <StyledUserStatusIndicator color={UserStatuses[status]} />
        <StyledUserAvatar src={avatar} alt={`${name}-avatar`} />
      </StyledHeaderUserArea>
    </StyledHeader>
  );
};

export default ClinicHeader;
