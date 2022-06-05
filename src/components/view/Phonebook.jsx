import { PhoneBookWrapper } from 'components/component/index';
import { ModalProvider } from 'components/component/Modal/ModalContext';

export const Phonebook = () => {
  return (
    <ModalProvider>
      <PhoneBookWrapper />
    </ModalProvider>
  );
};
