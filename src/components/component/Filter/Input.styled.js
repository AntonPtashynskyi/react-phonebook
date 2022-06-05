import styled from 'styled-components';
import * as palette from '../styles/Pallet.styled';

export const StyledInput = styled.input`
  padding: 1px 10px;

  width: 200px;
  height: 33px;
  background: transparent;

  border: 1px solid ${palette.MAIN_BORDER_COLOR};
  border-radius: 5px;
  box-shadow: none;

  color: ${palette.MAIN_TEXT_COLOR};
  line-height: 0;
  font-family: 'Montserrat';
  font-size: 16px;

  &:hover {
    border: 1px solid ${palette.FOCUS_COLOR};
  }

  &:focus {
    border: none;
    border: 1px solid ${palette.MAIN_BORDER_COLOR};
    outline: 1px solid white;
  }

  &::placeholder {
    padding: 1px 20px;
    color: ${palette.MAIN_TEXT_COLOR};
  }

  @media (min-width: 768px) {
    margin-left: 10px;
  }
`;
