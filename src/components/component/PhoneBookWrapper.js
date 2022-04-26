import { useState } from 'react';

import { ContactFilter, ContactForm, ContactsList, ModalButton } from './index';

export const PhoneBookWrapper = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <h2>Phone book</h2>
      <ContactFilter />
      <ModalButton modal={modal} setModal={setModal} />

      {modal && <ContactForm modal={modal} setModal={setModal} />}
      <ContactsList />
    </div>
  );
};
