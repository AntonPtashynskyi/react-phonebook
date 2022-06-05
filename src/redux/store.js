import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// import { persistedContactsReducerSlice } from './Contact-Slice';
import { authApi } from './AuthReducer';
import { contactApi, persistedContactsReducer } from './ContactsAPI';

export const store = configureStore({
  reducer: {
    // contact: persistedContactsReducerSlice,
    [authApi.reducerPath]: authApi.reducer,
    [contactApi.reducerPath]: persistedContactsReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactApi.middleware,
  ],
});

export const persistor = persistStore(store);
