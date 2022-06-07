import styled from 'styled-components';
import * as pallet from '../styles/Pallet.styled';

export const RegForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 320px;
  margin: 15px auto;
  color: ${pallet.MAIN_TEXT_COLOR};

  input:placeholder-shown {
    border: 1px solid white;
  }

  input {
    width: 220px;
    height: 40px;
    background-color: ${pallet.MAIN_BACKGROUND_COLOR};
    border: 1px solid lightblue;
    border-radius: 5px;
    margin: 0 0 10px 0;
    color: ${pallet.MAIN_TEXT_COLOR};
    font-size: 16px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: ${pallet.MAIN_TEXT_COLOR};
    -webkit-text-fill-font-size: 16px;
  }

  label {
    display: flex;
    flex-direction: column;
  }
`;
