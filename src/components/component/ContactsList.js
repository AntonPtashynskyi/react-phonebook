import { useSelector } from 'react-redux';
import { getAllContacts } from 'redux/Contact-Slice';

import { ContactItem } from './ContactItem';

export const ContactsList = () => {
  const contacts = useSelector(getAllContacts);

  return (
    <div>
      <h3>Contact list</h3>
      <ul style={{ listStyle: 'none' }}>
        {contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};
