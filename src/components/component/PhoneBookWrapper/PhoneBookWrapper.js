import React from 'react';
import { ContactFilter } from '../Filter/ContactFilter';

import { ContactsList, ModalButton } from '../index';
import { Modal } from '../Modal/Modal';

import { StyledSection } from './Section.styled';
import { useModal } from '../Modal/ModalContext';

export const PhoneBookWrapper = () => {
  const { modal } = useModal();

  return (
    <>
      <StyledSection>
        <h2>Phone book</h2>
        <ModalButton />
        <ContactFilter />
        {modal && <Modal />}
      </StyledSection>
      <ContactsList />
    </>
  );
};
