import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import * as pallet from '../styles/Pallet.styled';
import { useSelector } from 'react-redux';

const HomeWrapperStyled = styled.div`
  margin: 20px 0;
  color: ${pallet.MAIN_TEXT_COLOR};

  p {
    color: black;
    font-weight: 400;
  }
`;

export const Home = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const userName = useSelector(state => state.auth.user.name);

  return (
    <HomeWrapperStyled>
      <h2>Welcome to phone book </h2>
      {!isLoggedIn ? (
        <>
          <p>
            Please go to{' '}
            <NavLink to="login" style={{ color: 'white' }}>
              Login page
            </NavLink>{' '}
            or if you don't have an account go to{' '}
            <NavLink to="registration" style={{ color: 'white' }}>
              Registration page
            </NavLink>{' '}
            page
          </p>
        </>
      ) : (
        <>
          <p>Have a good day {userName}</p>
        </>
      )}
    </HomeWrapperStyled>
  );
};
