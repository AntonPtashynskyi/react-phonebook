// import toast from 'react-hot-toast';

import { StyledNavLink } from './NavLink.styled';
import { StyledHeader } from './Header.styled';
import { NavigationStyled } from './Navigation.styled';
// import { StyledButton } from '../styles/Button.styled';
import { RegistrationButton } from '../Registraion-Logion-Button/Registration-Login-Button';

export const Navigation = () => {
  // const handleLoginButton = () => {
  //   toast.error('Sorry, do not wort yet');
  // };

  return (
    <StyledHeader>
      <NavigationStyled>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="phone">PhoneBook</StyledNavLink>
      </NavigationStyled>
      <RegistrationButton />
      {/* <StyledButton margin="10px" onClick={handleLoginButton}>
        LogIn
      </StyledButton> */}
    </StyledHeader>
  );
};
