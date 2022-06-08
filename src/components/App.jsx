import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { authOperations } from 'redux/auth/auth-operations';
import {
  LayoutView,
  ContactsView,
  HomePage,
  Registration,
  LoginView,
} from './view/index';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutView />}>
          <Route index element={<HomePage />} />
          <Route path="phone" element={<ContactsView />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<LoginView />} />
        </Route>
      </Routes>
    </>
  );
};
