import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';

import '../component.css';
import {
  useCreateContactMutation,
  useGetContactQuery,
  useUpdateContactMutation,
} from 'redux/ContactsAPI';

import { StyledBackdrop } from './BackDrop.styled';
import { StyledModal } from './Modal.styled';
import { StyledModalButton } from '../styles/ModalButton.styled';
import { useModal } from './ModalContext';

// if need validate radio button
// const isCheckedOrRadio = type => ['checkbox', 'radio'].includes(type);

export const Modal = () => {
  const { setModalState: toggle, contactId, setContactId } = useModal();
  const { data: contact, isLoading } = useGetContactQuery(contactId);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');

  const [createContact] = useCreateContactMutation();
  const [updateContact] = useUpdateContactMutation();

  useEffect(() => {
    if (contact && contactId.length) {
      setName(contact.name);
      setSurname(contact.surname);
      setPhone(contact.phone);
      setEmail(contact.email);
      setId(contact.id);
    }
  }, [contact, contactId.length]);

  useEffect(() => {
    const close = e => {
      if (e.keyCode === 27) {
        toggle(false);
      }
    };

    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [toggle]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const values = {
      name,
      surname,
      phone,
      email,
      id,
    };

    if (contactId) {
      try {
        updateContact({ id, name, surname, phone, email });
        toast.success('Saved');
      } catch (error) {
        toast.error('Ups something went wrong');
      }
    } else {
      try {
        createContact(values);
        toast.success('Contact was added');
      } catch (error) {
        toast.error('Ups something went wrong');
      }
    }

    toggle(false);
    setContactId('');
    form.reset();
  };

  return (
    <StyledBackdrop>
      <StyledModal>
        <button className="close-button" onClick={() => toggle(false)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h2 className="modal-title">
          {contact ? 'Change contact' : 'Create new contact'}
        </h2>

        {isLoading ? (
          'LOADING...'
        ) : (
          <form onSubmit={handleSubmit} className="form">
            <div className="label-form">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={name}
                onChange={e => setName(e.currentTarget.value)}
                placeholder="Name"
                maxLength={10}
              />
            </div>
            <div className="label-form">
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                name="surname"
                id="surname"
                value={surname}
                onChange={e => setSurname(e.currentTarget.value)}
                placeholder="Surname"
                maxLength={15}
              />
            </div>
            <div className="label-form">
              <label htmlFor="phone">Phone </label>
              <input
                type="phone"
                name="phone"
                id="phone"
                value={phone}
                onChange={e => setPhone(e.currentTarget.value)}
                required
                placeholder="Phone number"
              />
            </div>
            <div className="label-form">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.currentTarget.value)}
                placeholder="Email"
              />
            </div>

            <StyledModalButton type="submit">
              {contact ? 'Save' : 'Add contact'}
            </StyledModalButton>
          </form>
        )}
      </StyledModal>
    </StyledBackdrop>
  );
};
