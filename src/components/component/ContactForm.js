import { useDispatch } from 'react-redux';
import { addContact } from 'redux/Contact-Slice';
import { nanoid } from 'nanoid';

import './component.css';
import { ModalButton } from './ModalButton';

const isCheckedOrRadio = type => ['checkbox', 'radio'].includes(type);

export const ContactForm = ({ modal, setModal }) => {
  const dispatch = useDispatch();

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

    dispatch(addContact(values));
    setModal(!modal);

    form.reset();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <ModalButton modal={modal} setModal={setModal} />
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
            />
          </div>

          <div className="label-form">
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              name="surname"
              id="surname"
              placeholder="Surname"
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

          <div className="label-check">
            <label htmlFor="favorite">add to favorite </label>
            <input type="checkbox" id="favorite" name="favorite" />
          </div>

          <button type="submit" className="add-button">
            Add contact
          </button>
        </form>
      </div>
    </div>
  );
};
