import { Routes, Route } from 'react-router-dom';

import {
  LayoutView,
  HomeView,
  ContactInfo,
  FavoriteContactsView,
} from './view/index';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutView />}>
          <Route index element={<HomeView />} />
          <Route path="favoriteContacts" element={<FavoriteContactsView />} />
          <Route path="favoriteContacts/:contactId" element={<ContactInfo />} />
        </Route>
      </Routes>
    </>
  );
};
