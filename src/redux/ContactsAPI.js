import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://627a4e8373bad50685867743.mockapi.io/api/v1',
  }),
  tagTypes: ['contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['contact'],
    }),
    getContact: builder.query({
      query: contactId => ({
        url: `/contacts/${contactId}`,
      }),
      providesTags: ['contact'],
    }),
    createContact: builder.mutation({
      query: ({ name, surname, phone, email }) => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name,
          surname,
          phone,
          email,
        },
      }),
      invalidatesTags: ['contact'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contact'],
    }),

    updateContact: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/contacts/${id}`,
        method: 'PUT',
        body: rest,
      }),
      invalidatesTags: ['contact'],
    }),
  }),
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactApi.reducer
);

export const {
  endpoints,
  useFetchContactsQuery,
  useGetContactQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
  useUpdateContactMutation,
} = contactApi;
