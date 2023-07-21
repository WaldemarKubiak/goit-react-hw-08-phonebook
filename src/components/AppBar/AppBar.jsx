import { useAuth } from 'components/hooks/useAuth';
import { Navigation } from 'components/Navigation/Navigation';
import c from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={c.header}>
      <Navigation />
      {isLoggedIn ? <p>Yes</p> : <p>No</p>}
    </header>
  );
};
