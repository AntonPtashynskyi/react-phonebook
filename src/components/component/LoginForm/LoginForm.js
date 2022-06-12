import { useNavigate } from 'react-router-dom';
import { RegForm } from '../RegistrationForm/RegistrationForm.styled';
import { StyledModalButton } from '../styles/ModalButton.styled';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from 'redux/ContactsAPI';
import { loginAuth } from 'redux/auth/Auth-Slice';
import toast from 'react-hot-toast';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login] = useLoginMutation();

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

    const response = await login(user);

    if (response.data) {
      dispatch(loginAuth(response.data));
      navigate('/phone');
    } else {
      toast.error('Ups try another password or email');
    }
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
