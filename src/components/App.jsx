import React, { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { useAuth } from './hooks';
import { refreshUser } from 'redux/auth/authOperations';
import { Loader } from './Loader/Loader';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
// import { HomePage } from 'pages/HomePage';
// import { LoginPage } from 'pages/LoginPage';
// import { RegisterPage } from 'pages/RegisterPage';
// import { ContactsPage } from 'pages/ContactsPage';
// import React, { useEffect } from 'react';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
// import { selectError, selectIsLoading } from 'redux/contacts/selectors';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/operations';
// import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="contacts" element={<ContactsPage />} /> */}
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

// const dispatch = useDispatch();
// const isLoading = useSelector(selectIsLoading);
// const error = useSelector(selectError);

// useEffect(() => {
//   dispatch(fetchContacts());
// }, [dispatch]);

//   return (
//     // <div className="container">
//     //   <h1>Phonebook</h1>
//     //   <ContactForm />
//     //   <h2>Contacts</h2>
//     //   <Filter />
//     {
//       /* {isLoading && !error && <Loader />} */
//     }
//     //   <ContactList />
//     // </div>
//   );
// };
