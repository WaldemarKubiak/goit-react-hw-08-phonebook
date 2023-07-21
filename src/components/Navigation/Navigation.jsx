import { NavLink } from 'react-router-dom';
import c from './Navigation.module.css';
import { useAuth } from 'components/hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={c.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={c.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
