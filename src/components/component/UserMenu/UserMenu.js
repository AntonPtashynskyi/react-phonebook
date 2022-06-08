import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { StyledButton } from '../styles/Button.styled';
import { authOperations } from 'redux/auth/auth-operations';
import { useNavigate } from 'react-router-dom';
import * as pallet from '../styles/Pallet.styled';

const UserMenuStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: ${pallet.MAIN_TEXT_COLOR};

  p {
    margin-right: 10px;
  }

  @media (min-width: 768px) {
  }
`;

export const UserMenu = () => {
  const userName = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async () => {
    await dispatch(authOperations.logout());
    navigate('/');
  };

  return (
    <UserMenuStyled style={{ display: 'flex', alignItems: 'center' }}>
      <p>Hello, {userName}</p>
      <StyledButton onClick={handleClick}>Log out</StyledButton>
    </UserMenuStyled>
  );
};
