import toast from 'react-hot-toast';

import { MdDelete, MdDownloading, MdModeEdit } from 'react-icons/md';

import { useDeleteContactMutation } from 'redux/ContactsAPI';
import { StyledContactItem } from './ContactItem.styled';
import { StyledButton } from '../styles/Button.styled';
import { StyledLink } from './ContactLink.styled';

export const ContactItem = ({ contact, isFetching }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const { name, surname, phone, email, id } = contact;

  return (
    <StyledContactItem>
      <div className="name">
        <p>{name}</p>
        <p>{surname}</p>
      </div>

      <StyledLink href={`tel:${phone}`} className="phone">
        {phone}
      </StyledLink>
      <StyledLink mode="mail" href={`mailto:${email}`} className="email">
        {email && email}
      </StyledLink>

      <div className="button-container">
        <StyledButton
          border="none"
          width="30px"
          onClick={() => toast.error("This didn't work yet")}
        >
          <MdModeEdit size="1.5em" />
        </StyledButton>
        <StyledButton
          border="none"
          width="30px"
          onClick={() => {
            deleteContact(id);
            toast.success('Contact was deleted');
          }}
        >
          {isLoading ? (
            <MdDownloading size="1.5em" />
          ) : (
            <MdDelete size="1,5em" />
          )}
        </StyledButton>
      </div>
    </StyledContactItem>
  );
};
