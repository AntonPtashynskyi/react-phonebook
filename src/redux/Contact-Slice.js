import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import data from './db';

const getVisibleContacts = (items, value) => {
  return items.filter(
    ({ name, surname, phone, email }) =>
      name.toLowerCase().includes(value) ||
      surname.toLowerCase().includes(value) ||
      phone.toLowerCase().includes(value) ||
      email.toLowerCase().includes(value)
  );
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: data,
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(item => item.id !== action.payload),
      };
    },
    setFilter(state, action) {
      const filter = action.payload;

      if (filter) {
        return {
          ...state,
          filter,
          contacts: getVisibleContacts(data, filter),
        };
      }
      return {
        contacts: data,
        filter: '',
      };
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContact, deleteContact, setFilter } = contactSlice.actions;

//Selectors
export const getAllContacts = state => state.contact.contacts;
