import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h2>Welcome to phone book </h2>
      <p>
        At this point, the authentication function is being implemented. Please
        go to the{' '}
        <NavLink to="phone" style={{ color: 'white' }}>
          PhoneBook
        </NavLink>{' '}
        page
      </p>
    </div>
  );
};
