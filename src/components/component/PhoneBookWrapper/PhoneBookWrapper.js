import { useState } from 'react';
import { ContactFilter } from '../Filter/ContactFilter';

import { ContactsList, ModalButton } from '../index';
import { Modal } from '../Modal/Modal';

import { StyledSection } from './Section.styled';

export const PhoneBookWrapper = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <StyledSection>
        <h2>Phone book</h2>
        <ModalButton modal={modal} setModal={setModal} />
        <ContactFilter />

        {modal && <Modal modal={modal} setModal={setModal} />}
      </StyledSection>
      <ContactsList />
    </>
  );
};
