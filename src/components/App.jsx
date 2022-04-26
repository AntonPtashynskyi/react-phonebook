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
          <Route path="contacts" element={<FavoriteContactsView />} />
          <Route path="contacts/:contactId" element={<ContactInfo />} />
        </Route>
      </Routes>
    </>
  );
};
