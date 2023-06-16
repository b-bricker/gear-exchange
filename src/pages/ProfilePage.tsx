import { useAuth0 } from '@auth0/auth0-react';

const ProfilePage = (): JSX.Element | null => {
  const { user } = useAuth0();

  if (user == null) {
    return null;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <br />
      <img src={user.picture} alt="Profile Picture" />
      <h2>Username: {user.preferred_username}</h2>
      <h2>Email: {user.email}</h2>
      <h2>Name: {user.name}</h2>
      <br />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default ProfilePage;
