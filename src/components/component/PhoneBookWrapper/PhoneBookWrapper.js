import React, { useState } from 'react';
import { ContactFilter } from '../Filter/ContactFilter';

import { ContactsList, AddContactButton } from '../index';
import { Modal } from '../Modal/Modal';

import { StyledSection } from './Section.styled';
import { useModal } from '../Modal/ModalContext';

export const PhoneBookWrapper = () => {
  const { modal } = useModal();
  const [filterValue, setFilter] = useState('');

  return (
    <>
      <StyledSection>
        <h2>Phone book</h2>
        <AddContactButton />
        <ContactFilter filter={filterValue} setFilter={setFilter} />
        {modal && <Modal />}
      </StyledSection>
      <ContactsList filterValue={filterValue} />
    </>
  );
};
