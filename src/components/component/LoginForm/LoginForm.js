import { useNavigate } from 'react-router-dom';
import { RegForm } from '../RegistrationForm/RegistrationForm.styled';
import { StyledModalButton } from '../styles/ModalButton.styled';
import { authOperations } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

export const LoginForm = () => {
  const dispatch = useDispatch();
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
    await dispatch(authOperations.login(user));
    navigate('/phone');
    form.reset();
  };

  return (
    <RegForm onSubmit={handleSubmit}>
      <h3>Login Form</h3>
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
  );
};
