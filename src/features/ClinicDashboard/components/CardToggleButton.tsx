import React, { useState } from 'react';
import { ToggleButton } from './CardToggleButtonStyles';

type ButtonProps = {
  onClick: () => void
};

const CardToggleButton = function (props: ButtonProps) {
  const { onClick } = props;
  const [isActive, setActive] = useState(false);
  const handleButtonClick = () => {
    setActive(!isActive);
    onClick();
  };

  return (<ToggleButton onClick={handleButtonClick} active={isActive} />);
};

export default CardToggleButton;
