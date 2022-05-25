import { StyledNavLink } from './NavLink.styled';
import { StyledHeader } from './Header.styled';
import { NavigationStyled } from './Navigation.styled';
import { StyledButton } from '../styles/Button.styled';

export const Navigation = () => {
  return (
    <StyledHeader>
      <NavigationStyled>
        <StyledNavLink to="/">PhoneBook</StyledNavLink>
        <StyledNavLink to="favoriteContacts">Contacts</StyledNavLink>
      </NavigationStyled>
      <StyledButton margin="10px">LogIn</StyledButton>
    </StyledHeader>
  );
};
