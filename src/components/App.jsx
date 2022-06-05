import { Routes, Route } from 'react-router-dom';

import { LayoutView, Phonebook, ContactInfo, HomePage } from './view/index';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutView />}>
          <Route index element={<HomePage />} />
          <Route path="phone" element={<Phonebook />} />
          <Route path="favoriteContacts/:contactId" element={<ContactInfo />} />
        </Route>
      </Routes>
    </>
  );
};
