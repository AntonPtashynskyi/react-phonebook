import React, { useContext, useState } from 'react';

const ModalContext = React.createContext();

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  const setModalState = id => {
    setModal(id);
  };

  return (
    <ModalContext.Provider value={{ modal, setModalState }}>
      {children}
    </ModalContext.Provider>
  );
};
