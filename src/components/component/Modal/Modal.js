import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

import '../component.css';
import {
  useCreateContactMutation,
  useGetContactQuery,
} from 'redux/ContactsAPI';

import { StyledBackdrop } from './BackDrop.styled';
import { StyledModal } from './Modal.styled';
import { StyledModalButton } from '../styles/ModalButton.styled';
import { useModal } from './ModalContext';

const isCheckedOrRadio = type => ['checkbox', 'radio'].includes(type);

export const Modal = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const { modal, setModalState: toggle } = useModal();
  const [createContact] = useCreateContactMutation();
  const { data, isLoading, status } = useGetContactQuery(
    modal,
    typeof modal === 'string'
  );
  //useEffect data && name === setName

  const handleSubmit = e => {
    e.preventDefault();

    const values = {};
    const form = e.currentTarget;
    const formEl = e.currentTarget.elements;

    for (const element of formEl) {
      const { name, value, type, checked } = element;

      if (name) {
        values[name] = isCheckedOrRadio(type) ? checked : value;
        values['id'] = nanoid();
      }
    }

    createContact(values);

    toggle(false);

    form.reset();
  };

  useEffect(() => {}, [modal]);

  useEffect(() => {
    const close = e => {
      if (e.keyCode === 27) {
        toggle(false);
      }
    };
    window.addEventListener('keydown', close);

    return () => window.removeEventListener('keydown', close);
  }, [modal, toggle]);

  return (
    <StyledBackdrop>
      <StyledModal>
        <button className="close-button" onClick={() => toggle(false)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h2 className="modal-title">Create new contact</h2>

        <form onSubmit={handleSubmit} className="form">
          <div className="label-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
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
              required
              placeholder="Phone number"
            />
          </div>

          <div className="label-form">
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" placeholder="Email" />
          </div>

          {/* <div className="label-check">
            <label htmlFor="favorite">add to favorite </label>
            <input type="checkbox" id="favorite" name="favorite" />
          </div> */}

          <StyledModalButton type="submit">Add contact</StyledModalButton>
        </form>
      </StyledModal>
    </StyledBackdrop>
  );
};
