import { useAuth } from 'components/hooks';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import c from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={c.wrapper}>
      <p className={c.username}>Welcome, {user.name}!</p>
      <button
        className={c.btnLogin}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};
