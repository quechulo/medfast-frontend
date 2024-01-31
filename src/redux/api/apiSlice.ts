import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  credentials: 'include',
});

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['User'],
  endpoints: (_builder) => ({}),
  keepUnusedDataFor: process.env.NODE_ENV === 'test' ? 0 : 60
});

export default apiSlice;
