import { ContactItem } from '../Contact-item/ContactItem';
import { useFetchContactsQuery } from 'redux/ContactsAPI';
import { StyledList } from './ContactList.styled';

const getVisibleContacts = (items, value) => {
  return items.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(value) || number.toLowerCase().includes(value)
  );
};

export const ContactsList = ({ filterValue }) => {
  const response = useFetchContactsQuery();

  let visibleContacts;

  if (response.data) {
    visibleContacts = getVisibleContacts(response.data, filterValue);
  }

  return (
    <>
      <h3>Contact list</h3>

      <StyledList className="contact-list">
        {visibleContacts &&
          visibleContacts.map(item => (
            <ContactItem contact={item} key={item.id} />
          ))}
      </StyledList>
    </>
  );
};
