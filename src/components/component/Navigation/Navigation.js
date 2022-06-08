import { StyledNavLink } from './NavLink.styled';
import { StyledHeader } from './Header.styled';
import { NavigationStyled } from './Navigation.styled';
import { RegistrationButton } from '../Registraion-Logion-Button/Registration-Login-Button';
import { UserMenu } from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <StyledHeader>
      <NavigationStyled>
        <StyledNavLink to="/">Home</StyledNavLink>
        {isLoggedIn && <StyledNavLink to="phone">PhoneBook</StyledNavLink>}
      </NavigationStyled>
      {isLoggedIn ? <UserMenu /> : <RegistrationButton />}
    </StyledHeader>
  );
};
