import styled from 'styled-components';

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border-radius: 10px;
  max-width: 300px;

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .modal-title {
    margin: 0 auto 10px auto;
    font-size: 20px;
  }

  .label-form {
    display: flex;
    flex-direction: column;

    font-size: 14px;
    color: rgb(45, 32, 102);
  }

  .label-check {
    margin: 20px 0 20px 0;
    font-family: sans-serif;
    font-size: 14px;

    padding: 5px 10px;
    border-radius: 5px;
  }

  input {
    width: 250px;
    height: 30px;
    border: 1px solid rgba(45, 32, 102, 0.5);
    border-radius: 5px;

    &::placeholder {
      color: rgba(136, 136, 136, 0.959);
      font-size: 10px;
    }
  }

  .close-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;

    padding: 10px;
    border-radius: 50%;
    border: none;
    transition: all 250ms ease;
    margin: 0;

    &:hover,
    &:focus {
      transform: scale(1.3);
    }
  }
`;
