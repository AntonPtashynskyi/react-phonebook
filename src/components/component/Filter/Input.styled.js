import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 1px 10px;

  width: 200px;
  height: 33px;
  background: transparent;

  border: 1px solid rgba(255, 255, 255, 0.54);
  border-radius: 5px;
  box-shadow: none;

  color: rgba(255, 255, 255, 0.54);
  line-height: 0;
  font-family: 'Montserrat';
  font-size: 16px;

  &:focus {
    border: none;
    border: 1px solid rgba(255, 255, 255, 0.54);
    outline: 1px solid white;
  }

  &::placeholder {
    padding: 1px 20px;
    color: rgba(255, 255, 255, 0.54);
  }

  @media (min-width: 768px) {
    margin-left: 10px;
  }
`;
