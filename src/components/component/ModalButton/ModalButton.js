import { StyledButton } from '../styles/Button.styled';

export const ModalButton = ({ modal, setModal }) => {
  const handleModal = () => {
    setModal(!modal);
  };

  return <StyledButton onClick={handleModal}>Add contact</StyledButton>;
};
