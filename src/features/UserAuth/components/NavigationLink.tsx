import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import StyledLink from 'features/UserAuth/core/StyledLink';

type NavigationLinkProps = {
  path: string,
  text: string,
};
const NavigationLink = function ({ path, text }:NavigationLinkProps) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(path);
  };
  return <StyledLink onClick={handleNavigate}>{text}</StyledLink>;
};
NavigationLink.propTypes = {
  path: PropTypes.string,
  text: PropTypes.string,
};
export default NavigationLink;
