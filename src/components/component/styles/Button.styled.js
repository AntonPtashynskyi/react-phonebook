import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-family: 'Montserrat';
  min-width: ${props => props.width || '90px'};
  height: 33px;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.54);
  border: ${props => props.border || '1px solid rgba(255, 255, 255, 0.54)'};
  border-radius: 5px;
  transition: all 150ms ease-in;
  cursor: pointer;

  margin-bottom: ${props => props.margin};

  &:hover {
    color: rgba(222, 165, 53, 0.694);
    border: 1px solid rgba(222, 165, 53, 0.694);
  }

  &:focus {
    color: rgba(222, 165, 53, 0.694);
    border: 1px solid rgba(222, 165, 53, 0.694);
    outline: 1px solid white;
  }
`;
