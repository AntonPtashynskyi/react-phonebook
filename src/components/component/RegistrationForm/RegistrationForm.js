import { useNavigate } from 'react-router-dom';
import { RegForm } from './RegistrationForm.styled';
import { StyledModalButton } from '../styles/ModalButton.styled';

export const RegistrationForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const user = {};

    const form = e.currentTarget;
    const formElements = form.elements;

    for (const element of formElements) {
      const { name, value } = element;

      if (name) {
        user[name] = value;
      }
    }

    console.log(user);

    navigate('/');
    form.reset();
  };

  return (
    <>
      <RegForm onSubmit={handleSubmit}>
        <h3>Registration form</h3>
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <StyledModalButton type="submit">Submit</StyledModalButton>
      </RegForm>
    </>
  );
};
