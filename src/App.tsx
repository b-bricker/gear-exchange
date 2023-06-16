import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import ItemsListPage from './pages/ItemsListPage';
import CallbackPage from './pages/CallbackPage';
import ItemDetailPage from './pages/ItemDetailPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import AdminPage from './pages/AdminPage';
import { useAuth0 } from '@auth0/auth0-react';
import PageLoader from './components/PageLoader';
import GlobalStyles from './components/styled/GlobalStyles';
import AppHeader from './components/header/AppHeader';
import ItemsFavoritedPage from './pages/ItemsFavoritedPage';
import AuthenticationGuard from './components/AuthenticationGuard';

const App = (): JSX.Element => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div>
        <PageLoader />
      </div>
    );
  }

  return (
    <>
      <GlobalStyles />
      <AppHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/callback" element={<CallbackPage />} />
          <Route path="/items" element={<ItemsListPage />} />
          <Route path="/items/:itemId" element={<ItemDetailPage />} />
          <Route
            path="/favorites"
            element={<AuthenticationGuard component={ItemsFavoritedPage} />}
          />
          <Route
            path="/profile"
            element={<AuthenticationGuard component={ProfilePage} />}
          />
          <Route
            path="/admin"
            element={<AuthenticationGuard component={AdminPage} />}
          />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
