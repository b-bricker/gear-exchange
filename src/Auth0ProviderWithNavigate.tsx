import { type AppState, Auth0Provider } from '@auth0/auth0-react';
import { type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  children?: ReactNode;
};

const Auth0ProviderWithNavigate = ({ children }: Props): JSX.Element | null => {
  const navigate = useNavigate();

  const domain: string = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId: string = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri: string = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  const onRedirectCallback = (appState: AppState | undefined): void => {
    const target =
      appState?.returnTo != null ? appState.returnTo : window.location.pathname;

    navigate(target);
  };

  if (!(domain != null && clientId != null && redirectUri != null)) {
    console.log('missing critical info');
    return null;
  } else {
    console.log('domain:', domain);
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
