import { useAuth0 } from '@auth0/auth0-react';
import {
  Header,
  NavBar,
  NavContainer,
  NavIcon,
  NavItemButton,
  NavItemLink,
  NavItems,
  NavLogo,
  NavTitle,
} from './Header.styles';

const AppHeader = (): JSX.Element => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleSignup = async (): Promise<void> => {
    await loginWithRedirect({
      appState: {
        returnTo: '/',
      },
      authorizationParams: {
        screen_hint: 'signup',
      },
    });
  };

  const handleLogin = async (): Promise<void> => {
    console.log('logging in');
    await loginWithRedirect({
      appState: {
        returnTo: '/',
      },
    });
  };

  const handleLogout = (): void => {
    console.log('logging out');
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <Header>
      <NavBar>
        {/* left side items */}
        <NavLogo to="/">
          <NavIcon />
          <NavTitle>LHFC Gear Exchange</NavTitle>
        </NavLogo>
        {/* right side items */}
        <NavContainer>
          <NavItems>
            {isAuthenticated ? (
              <>
                <NavItemLink to="/favorites">Favorites</NavItemLink>
                <NavItemLink to="/profile">Profile</NavItemLink>
                <NavItemButton onClick={handleLogout} primary={false}>
                  Log Out
                </NavItemButton>
              </>
            ) : (
              <>
                <NavItemButton
                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                  onClick={handleSignup}
                  primary={false}
                >
                  Sign Up
                </NavItemButton>
                <NavItemButton
                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                  onClick={handleLogin}
                  primary
                >
                  Log In
                </NavItemButton>
              </>
            )}
          </NavItems>
        </NavContainer>
      </NavBar>
    </Header>
  );
};

export default AppHeader;
