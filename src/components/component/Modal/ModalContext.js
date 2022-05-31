import React, { useContext, useState } from 'react';

const ModalContext = React.createContext();

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [contactId, setContactId] = useState('');

  const setModalState = boolean => {
    setModal(boolean);
  };

  return (
    <ModalContext.Provider
      value={{ modal, setModalState, contactId, setContactId }}
    >
      {children}
    </ModalContext.Provider>
  );
};
