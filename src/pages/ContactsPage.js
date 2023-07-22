import { Helmet } from 'react-helmet';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';

const ContactsPage = () => {
  // const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  return (
    <div>
      {/* <h1>Phonebook</h1> */}
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      {/* <h2>Contacts</h2> */}
      <Filter />

      <ContactList />
    </div>
  );
};

export default ContactsPage;

// <div className="container">
//     //   <h1>Phonebook</h1>
//     //   <ContactForm />
//     //   <h2>Contacts</h2>
//     //   <Filter />
//     {
//       /* {isLoading && !error && <Loader />} */
//     }
//     //   <ContactList />
//     // </div>
