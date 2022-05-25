import styled from 'styled-components';

export const StyledList = styled.ul`
  padding: 0;

  &::after {
    content: '';
    width: 360px;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 1024px) {
  }
`;
