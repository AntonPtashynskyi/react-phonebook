import { ContactItem } from '../Contact-item/ContactItem';
import { useFetchContactsQuery } from 'redux/ContactsAPI';

import { StyledList } from './ContactList.styled';

export const ContactsList = () => {
  const { data } = useFetchContactsQuery();

  return (
    <>
      <h3>Contact list</h3>

      <StyledList className="contact-list">
        {data && data.map(item => <ContactItem contact={item} key={item.id} />)}
      </StyledList>
    </>
  );
};
