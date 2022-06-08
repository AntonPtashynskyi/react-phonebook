import { ContactItem } from '../Contact-item/ContactItem';
import { useFetchContactsQuery } from 'redux/ContactsAPI';
import { StyledList } from './ContactList.styled';

const getVisibleContacts = (items, value) => {
  return items.filter(
    ({ name, surname, phone, email }) =>
      name.toLowerCase().includes(value) ||
      surname.toLowerCase().includes(value) ||
      phone.toLowerCase().includes(value) ||
      email.toLowerCase().includes(value)
  );
};

export const ContactsList = ({ filterValue }) => {
  const { data } = useFetchContactsQuery();

  let visibleContacts;

  if (data) {
    visibleContacts = getVisibleContacts(data, filterValue);
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
