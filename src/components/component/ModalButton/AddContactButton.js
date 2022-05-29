import { useModal } from '../Modal/ModalContext';
import { StyledButton } from '../styles/Button.styled';

export const AddContactButton = () => {
  const { setModalState: toggle } = useModal();

  return <StyledButton onClick={() => toggle(true)}>Add contact</StyledButton>;
};
