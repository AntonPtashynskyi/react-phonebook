import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addContact } = contactSlice.actions;
