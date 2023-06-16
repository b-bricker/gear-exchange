import { withAuthenticationRequired } from '@auth0/auth0-react';
import PageLoader from './PageLoader';
import { type ComponentType } from 'react';

type Props = {
  component: ComponentType;
};

const AuthenticationGuard = ({ component }: Props): any => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <PageLoader />,
  });
  return <Component />;
};

export default AuthenticationGuard;
