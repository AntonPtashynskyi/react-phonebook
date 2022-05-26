import styled from 'styled-components';

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;

  width: 100%;
  height: 100%;
  margin: 0;

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .modal-title {
    margin: 0 auto 10px auto;
    font-size: 25px;
  }

  .label-form {
    display: flex;
    flex-direction: column;

    font-size: 20px;
    color: rgb(45, 32, 102);
    width: 100%;
  }

  .label-check {
    margin: 20px 0 20px 0;
    font-family: sans-serif;
    font-size: 14px;

    padding: 5px 10px;
    border-radius: 5px;
  }

  input {
    height: 50px;
    border: 1px solid rgba(45, 32, 102, 0.5);
    border-radius: 5px;

    &::placeholder {
      color: rgba(136, 136, 136, 0.959);
      font-size: 15px;
    }
  }

  .close-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;

    font-size: 35px;

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

  @media (min-width: 764px) {
    width: 400px;
    height: 550px;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 1024px) {
    width: 350px;
    height: 400px;

    input {
      height: 30px;
    }

    .label-form {
      font-size: 14px;
    }

    .modal-title {
      font-size: 20px;
    }

    input::placeholder {
      font-size: 12px;
    }

    .close-button {
      font-size: 24px;
    }
  }
`;
