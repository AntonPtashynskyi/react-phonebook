import styled from 'styled-components';

export const StyledModalButton = styled.button`
  width: 120px;
  height: 35px;
  background-color: rgb(41, 132, 168);
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  font-family: sans-serif;
  transition: all 250ms ease-in;
  margin-top: 10px;

  &:hover {
    background-color: rgb(9, 52, 70);
    transition: all 250ms ease-in;
    box-shadow: 0px 0px 18px 0px rgba(113, 116, 141, 0.76);
  }
`;
