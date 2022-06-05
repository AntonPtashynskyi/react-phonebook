import { NavLink } from 'react-router-dom';
import { StyledButton } from '../styles/Button.styled';
import styled from 'styled-components';

const RegWrapper = styled.div`
  display: flex;
  flex-direction: column;

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
      <StyledButton margin="10px">LogIn</StyledButton>
    </RegWrapper>
  );
};
