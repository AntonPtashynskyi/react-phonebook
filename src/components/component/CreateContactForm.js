import { useDispatch } from 'react-redux';
import { addContact } from 'redux/Contact-Slice';

const isCheckedOrRadio = type => ['checkbox', 'radio'].includes(type);

export const CreateContactForm = () => {
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
      }
    }

    dispatch(addContact(values));
    form.reset();
  };

  return (
    <div style={{ border: '1px solid black' }}>
      <h2>Create new contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="name" required placeholder="Name" />
        </label>
        <label>
          <input type="text" name="surname" placeholder="Surname" />
        </label>
        <label>
          <input
            type="phone"
            name="phone"
            // required
            placeholder="Phone number"
          />
        </label>
        <label>
          <input type="text" name="email" placeholder="Email" />
        </label>
        <label>
          <input type="checkbox" name="checkbox" />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};
