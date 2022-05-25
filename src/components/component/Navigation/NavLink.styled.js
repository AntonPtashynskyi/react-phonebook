import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  color: rgba(255, 255, 255, 0.51);
  font-weight: 600;
  font-size: 24px;
  text-decoration: none;
  transition: color 250ms ease;
  margin-bottom: 10px;

  &:hover,
  &:focus {
    color: rgb(233, 156, 100);
  }

  &.active {
    color: rgb(233, 156, 100);
  }
`;
