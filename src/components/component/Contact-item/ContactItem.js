import toast from 'react-hot-toast';

import { MdDelete, MdDownloading, MdModeEdit } from 'react-icons/md';

import {
  useDeleteContactMutation,
  // useUpdateContactMutation,
} from 'redux/ContactsAPI';
import { StyledContactItem } from './ContactItem.styled';
import { StyledButton } from '../styles/Button.styled';
import { StyledLink } from './ContactLink.styled';
import { useModal } from '../Modal/ModalContext';

export const ContactItem = ({ contact }) => {
  const { setModalState: toggle } = useModal();
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  // const [updateContact] = useUpdateContactMutation();

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
      {email && (
        <StyledLink mode="mail" href={`mailto:${email}`} className="email">
          {email}
        </StyledLink>
      )}

      <div className="button-container">
        <StyledButton
          border="none"
          name="edit"
          width="30px"
          // onClick={() => toast.error("This didn't work yet")}
          onClick={() => toggle(id)}
        >
          <MdModeEdit size="1.5em" />
        </StyledButton>
        <StyledButton
          border="none"
          width="30px"
          name="delete"
          onClick={() => {
            deleteContact(id);
            toast.success('Contact was deleted');
          }}
        >
          {isLoading ? (
            <MdDownloading size="1.5em" />
          ) : (
            <MdDelete size="1.5em" />
          )}
        </StyledButton>
      </div>
    </StyledContactItem>
  );
};
