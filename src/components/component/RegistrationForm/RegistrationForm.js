import { useNavigate } from 'react-router-dom';
import { RegForm } from './RegistrationForm.styled';
import { StyledModalButton } from '../styles/ModalButton.styled';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { registrationAuth } from 'redux/auth/Auth-Slice';
import { useRegistrationMutation } from 'redux/ContactsAPI';

export const RegistrationForm = () => {
  const [registration] = useRegistrationMutation();
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

    try {
      const response = await registration(user);

      if (response.data) {
        dispatch(registrationAuth(response.data));
        form.reset();
        navigate('/phone');
      } else {
        if (response.error.data.code === 11000) {
          return toast.error(`${user.email} already exist`);
        }

        toast.error(response.error.data.message);
      }
    } catch (error) {
      console.log('catch', error);
    }
  };

  return (
    <>
      <RegForm onSubmit={handleSubmit}>
        <h3>Registration form</h3>
        <label>
          Name
          <input
            type="text"
            name="name"
            required
            placeholder=" "
            minLength={4}
          />
        </label>
        <label>
          Email
          <input type="email" name="email" required placeholder=" " />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            required
            placeholder=" "
            minLength={7}
          />
        </label>
        <StyledModalButton type="submit">Submit</StyledModalButton>
      </RegForm>
    </>
  );
};
