import styled from 'styled-components';
import * as palette from '../styles/Pallet.styled';

export const StyledContactItem = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;

  color: #fff;

  padding: 10px 10px;
  border: 1px solid ${palette.MAIN_BORDER_COLOR};
  border-radius: 5px;
  width: 100%;
  transition: box-shadow 150ms ease;

  margin-bottom: 5px;

  &:hover,
  &:focus {
    box-shadow: 0px 0px 4px white;
  }

  p {
    margin: 0;
    margin-bottom: 10px;
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 3px;
    right: 5px;
  }

  @media (min-width: 768px) {
    width: 360px;

    &:nth-child(1n) {
      margin-right: 5px;
    }
  }

  @media (min-width: 1024px) {
    width: 100%;
    flex-direction: row;

    &:hover .button-container {
      display: flex;
    }

    .button-container {
      display: none;
    }

    p,
    a {
      margin: 0 5px 0 0;
    }

    .phone {
      width: 200px;
    }

    .name {
      display: flex;
      width: 300px;
    }
  }
`;
