import styled from 'styled-components';
import StyledButton from '../core/StyledButton';
import * as constants from '../../../services/constants';
import iconDotBurgerActive from '../images/icon-dotburger-active.svg';
import iconDotBurger from '../images/icon-dotburger.svg';

type ToggleButtonProps = {
  active: boolean
};

export const ToggleButton = styled(StyledButton)<ToggleButtonProps>`
    grid-area: button;
    border: none;
    width: 40px;
    height: 40px;
    outline: none;
    cursor: pointer;
    align-self: center;
    border-radius: 6px;
    background-color: ${({ active }) => (active ? constants.formBackgroundColor : 'transparent')};
    background-image: url(${(active) => (active ? iconDotBurgerActive : iconDotBurger)});
    background-repeat: no-repeat;
    background-position: center;
`;
