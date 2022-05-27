import { PhoneBookWrapper } from 'components/component/index';
import { ModalProvider } from 'components/component/Modal/ModalContext';

export const HomeView = () => {
  return (
    <ModalProvider>
      <PhoneBookWrapper />
    </ModalProvider>
  );
};
