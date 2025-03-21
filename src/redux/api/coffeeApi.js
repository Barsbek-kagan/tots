import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const coffeeApi = createApi({
  reducerPath: 'Log in',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://api.cdp.setel.devopsinsider.io/api/v1/account-service/login',
  }),
  endpoints: builder => ({
    getMenu: builder.query({
      query: () => '{{host}}/auth/register',
    }),
  }),
});
export const { useGetMenuQuery } = coffeeApi;
