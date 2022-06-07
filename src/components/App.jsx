import { Routes, Route } from 'react-router-dom';

import {
  LayoutView,
  Phonebook,
  HomePage,
  Registration,
  LoginView,
} from './view/index';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutView />}>
          <Route index element={<HomePage />} />
          <Route path="phone" element={<Phonebook />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<LoginView />} />
        </Route>
      </Routes>
    </>
  );
};
