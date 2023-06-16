import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiSoccerBall } from 'react-icons/gi';
import {
  BACKGROUND_COLOR,
  DARK_TEXT_COLOR,
  LIGHT_TEXT_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from '../../constants/color-palette';

export const Header = styled.header`
  width: 100%;
  background-color: var(--primary-color);
  height: 10%;
  display: flex;
`;

/**
 * contains all nav elements, considered 1st level
 */
export const NavBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

/**
 * general container for 2nd level nav element groups
 */
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

// left side of 2nd level group
/**
 * logo element that wraps icon and title text
 */
export const NavLogo = styled(Link)`
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: bold;
  justify-content: space-between;
  padding: 2rem;
  color: var(--light-text-color);

  &:hover {
    color: var(--secondary-color);
  }
`;
/**
 * app icon element for nav bar
 */
export const NavIcon = styled(GiSoccerBall)`
  padding: 1rem;
`;

/**
 * app title for nav bar use
 */
export const NavTitle = styled.h1`
  font-size: 2rem;
`;

// right side of 2nd level group
/**
 * unordered list element contains nav bar menu options
 */
export const NavItems = styled.ul`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  text-align: center;
`;

/**
 * list item representing nav bar menu option
 */
export const NavItem = styled.li`
  list-style: none;
`;

/**
 * link element for menu bar option
 */
export const NavItemLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 2rem;
  color: var(--light-text-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;

  &:hover {
    color: var(--secondary-color);
  }
`;

/**
 * button element for menu bar options
 */
export const NavItemButton = styled.button<{ primary: boolean }>`
  border-radius: 20px;
  background-color: ${({ primary }) =>
    primary ? SECONDARY_COLOR : BACKGROUND_COLOR};
  color: ${({ primary }) => (primary ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR)};
  padding: 0.25rem 0.5rem;
  font-size: 1.5rem;
  outline: none;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${({ primary }) =>
      primary ? BACKGROUND_COLOR : SECONDARY_COLOR};
    color: ${PRIMARY_COLOR};
  }
`;
