import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import StyledLink from '../core/StyledLink';

const NavigationLink = function ({ path, text }) {
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
