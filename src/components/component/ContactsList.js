import { ContactItem } from './ContactItem';
import { useFetchContactsQuery } from 'redux/ContactsAPI';

export const ContactsList = () => {
  const { data } = useFetchContactsQuery();

  return (
    <div>
      <h3>Contact list</h3>
      <ul style={{ listStyle: 'none' }}>
        {data && data.map(item => <ContactItem contact={item} key={item.id} />)}
      </ul>
    </div>
  );
};
