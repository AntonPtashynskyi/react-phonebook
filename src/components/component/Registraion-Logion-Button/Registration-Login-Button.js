import { NavLink } from 'react-router-dom';
import { StyledButton } from '../styles/Button.styled';
import styled from 'styled-components';

const RegWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const RegistrationButton = () => {
  return (
    <RegWrapper>
      <NavLink to="registration">
        <StyledButton margin="10px">Registration</StyledButton>
      </NavLink>
      <NavLink to="login">
        <StyledButton margin="10px">LogIn</StyledButton>
      </NavLink>
    </RegWrapper>
  );
};
