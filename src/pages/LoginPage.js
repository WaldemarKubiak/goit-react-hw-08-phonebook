import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
};

export default LoginPage;

//===Test data===
/*
Username: Mango
email: mango@mail.com
password: mango123
*/
