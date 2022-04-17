import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './Contact-Slice';

export const store = configureStore({
  reducer: {
    contact: contactSlice.reducer,
    allContacts: [],
  },
});
