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

// import { persistedContactsReducer } from './Contact-Slice';
import { contactApi, persistedContactsReducer } from './ContactsAPI';

export const store = configureStore({
  reducer: {
    // contact: persistedContactsReducer,
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
