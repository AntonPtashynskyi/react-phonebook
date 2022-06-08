import { useNavigate } from 'react-router-dom';
import { RegForm } from './RegistrationForm.styled';
import { StyledModalButton } from '../styles/ModalButton.styled';
import { useDispatch } from 'react-redux';

import { authOperations } from 'redux/auth/auth-operations';
// import { useRegisterQuery } from 'redux/AuthReducer';

export const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

    dispatch(authOperations.register(user));
    navigate('/phone');
    form.reset();
  };

  return (
    <>
      <RegForm onSubmit={handleSubmit}>
        <h3>Registration form</h3>
        <label>
          Name
          <input type="text" name="name" required placeholder=" " />
        </label>
        <label>
          Email
          <input type="email" name="email" required placeholder=" " />
        </label>
        <label>
          Password
          <input type="password" name="password" required placeholder=" " />
        </label>
        <StyledModalButton type="submit">Submit</StyledModalButton>
      </RegForm>
    </>
  );
};
