import React from 'react';
import PropTypes from 'prop-types';
import StyledNavigationButton from 'features/ClinicDashboard/core/StyledNavigationButton';

type NavigationButtonProps = {
  path: string,
  isActive: boolean,
  action:(arg:string)=>void
};
const NavigationButton = function ({ path, action, isActive }:NavigationButtonProps) {
  const handleNavigate = () => {
    action(path);
  };
  return (
    <StyledNavigationButton isActive={isActive} onClick={handleNavigate}>
      {path.charAt(0).toUpperCase() + path.slice(1)}
    </StyledNavigationButton>
  );
};

NavigationButton.propTypes = {
  path: PropTypes.string,
  isActive: PropTypes.bool,
  action: PropTypes.func,
};

export default NavigationButton;
