import {
  EntityState,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit';
import apiSlice from '../api/apiSlice';
import { RootState } from '../store';
import RegisterUser from '../../types/RegisterUser';
import { ApiSuccessResponse } from '../../types/ApiResponseTypes';
import { User } from '../../types/UserTypes';
import isDevEnv from '../../utils/isDevEnv';

const userAdapter = createEntityAdapter<User>();
const initialState = userAdapter.getInitialState();

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<EntityState<User>, void>({
      query: () => ({
        url: '/users',
        validateStatus: (response, result) =>
          response.status === 200 && !result?.error,
      }),
      keepUnusedDataFor: isDevEnv() ? 5 : 60,
      transformResponse: (response: ApiSuccessResponse<User[]>) => {
        const loadedUsers = response.data;
        return userAdapter.setAll(initialState, loadedUsers);
      },
      providesTags: (result): any => {
        if (result?.ids) {
          return [
            { type: 'User', id: 'LIST' },
            ...result.ids.map((id) => ({ type: 'User', id })),
          ];
        }

        return [{ type: 'User', id: 'LIST' }];
      },
    }),
    registerUser: builder.mutation({
      query: (user: RegisterUser) => ({
        url: '/users',
        method: 'POST',
        body: user,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useRegisterUserMutation } = usersApiSlice;

// returns the query result object
export const selectUsersResult = usersApiSlice.endpoints.getUsers.select();

// memoized selector
const selectUsersData = createSelector(
  selectUsersResult,
  (usersResult) => usersResult?.data // normalized state object with entities and ids arrays
);

// renaming selectors created by getSelectors
export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
} = userAdapter.getSelectors<RootState>(
  (state) => selectUsersData(state) ?? initialState
);
