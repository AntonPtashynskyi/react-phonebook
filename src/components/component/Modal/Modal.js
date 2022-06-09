import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';

import '../component.css';
import {
  useCreateContactMutation,
  useUpdateContactMutation,
} from 'redux/ContactsAPI';

import { StyledBackdrop } from './BackDrop.styled';
import { StyledModal } from './Modal.styled';
import { StyledModalButton } from '../styles/ModalButton.styled';
import { useModal } from './ModalContext';

export const Modal = () => {
  const { setModalState: toggle, contactId, setContactId } = useModal();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [createContact] = useCreateContactMutation();
  const [updateContact] = useUpdateContactMutation();

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

    if (contactId) {
      try {
        updateContact({ contactId, name, number });
        setContactId('');
        toast.success('Saved');
      } catch (error) {
        toast.error('Ups something went wrong');
      }
    } else {
      try {
        createContact({ name, number });
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
        <button
          className="close-button"
          onClick={() => {
            setContactId('');
            toggle(false);
          }}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h2 className="modal-title">
          {contactId ? 'Edit contact' : 'Create new contact'}
        </h2>

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
              minLength={4}
              maxLength={10}
            />
          </div>
          <div className="label-form">
            <label htmlFor="number">Phone </label>
            <input
              type="phone"
              name="number"
              id="number"
              value={number}
              onChange={e => setNumber(e.currentTarget.value)}
              required
              placeholder="Phone number"
              maxLength={15}
            />
          </div>
          <StyledModalButton type="submit">
            {contactId ? 'Save' : 'Add contact'}
          </StyledModalButton>
        </form>
      </StyledModal>
    </StyledBackdrop>
  );
};
