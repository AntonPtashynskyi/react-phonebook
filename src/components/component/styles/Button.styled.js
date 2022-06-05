import styled from 'styled-components';
import * as palette from '../styles/Pallet.styled';

export const StyledButton = styled.button.attrs({ className: 'add-button' })`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-family: 'Montserrat';
  min-width: ${props => props.width || '90px'};
  height: ${props => props.height || '33px'};
  background-color: transparent;
  color: ${palette.MAIN_TEXT_COLOR};
  border: ${props => props.border || `1px solid ${palette.MAIN_BORDER_COLOR}`};
  border-radius: 5px;
  transition: all 150ms ease-in;
  padding: ${props => props.padding || '0 10px'};

  box-sizing: border-box;

  cursor: pointer;

  margin-bottom: ${props => props.margin};

  &:hover {
    color: ${palette.FOCUS_COLOR};
    border: 1px solid ${palette.FOCUS_COLOR};
  }

  &:focus {
    color: ${palette.FOCUS_COLOR};
    border: 1px solid ${palette.FOCUS_COLOR};
    outline: 1px solid white;
  }
`;
