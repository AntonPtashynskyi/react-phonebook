import { Routes, Route } from 'react-router-dom';

import { LayoutView, HomeView, ContactsView, ContactInfo } from './view/index';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutView />}>
          <Route index element={<HomeView />} />
          <Route path="contacts" element={<ContactsView />} />
          <Route path="contacts/:contactId" element={<ContactInfo />} />
        </Route>
      </Routes>
    </>
  );
};
