import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.54);

  text-align: center;

  a {
    display: block;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    a {
      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
`;
