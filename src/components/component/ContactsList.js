import { useSelector } from 'react-redux';
import { getAllContacts } from 'redux/Contact-Slice';

import { ContactItem } from './ContactItem';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'redux/ContactsAPI';

export const ContactsList = () => {
  // const contacts = useSelector(getAllContacts);
  const { data, isFetching } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  return (
    <div>
      <h3>Contact list</h3>
      <ul style={{ listStyle: 'none' }}>
        {/* {contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))} */}
        {data && data.map(item => <ContactItem contact={item} />)}
      </ul>
    </div>
  );
};

// <li key={item.id}>
// <p>{item.name}</p>
// <p>{item.phone}</p>
// <p>{item.email}</p>
// <button onClick={() => deleteContact(item.id)}>delete</button>
// </li>
