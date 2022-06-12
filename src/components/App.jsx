import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { ProtectedRoute } from './view/ProtectedRoute';
import { PublicRout } from './view/PublicRoute';
import { useSelector } from 'react-redux';
import {
  LayoutView,
  ContactsView,
  HomePage,
  Registration,
  LoginView,
} from './view/index';

import { useRefreshUserQuery } from 'redux/ContactsAPI';
import { refreshAuth } from 'redux/auth/Auth-Slice';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  const { data: user } = useRefreshUserQuery(null, { skip: token === null });

  useEffect(() => {
    if (user === undefined || token === null) {
      return;
    }

    dispatch(refreshAuth(user));
  }, [dispatch, token, user]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutView />}>
          <Route index element={<HomePage />} />
          <Route
            path="phone"
            element={
              <ProtectedRoute>
                <ContactsView />
              </ProtectedRoute>
            }
          />
          <Route element={<PublicRout />}>
            <Route path="registration" element={<Registration />} />
            <Route path="login" element={<LoginView />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
