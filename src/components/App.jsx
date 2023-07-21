import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { ContactsPage } from 'pages/ContactsPage';
// import React, { useEffect } from 'react';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
// import { selectError, selectIsLoading } from 'redux/contacts/selectors';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/operations';
// import { Loader } from './Loader/Loader';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
}

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
