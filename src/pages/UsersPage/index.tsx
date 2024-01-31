import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EntityId } from '@reduxjs/toolkit';
import { useGetUsersQuery } from 'src/redux/user/usersApiSlice';
import { useSendLogoutMutation } from 'src/redux/auth/authApiSlice';

// note: this component is for testing purposes only

interface Props {}

const UsersPage: React.FC<Props> = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetUsersQuery(
    undefined,
    {
      pollingInterval: 15000, // poll every 15 seconds
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
    }
  );
  const [
    sendLogout,
    {
      isLoading: isLogoutLoading,
      isSuccess: isLogoutSuccess,
      isError: isLogoutError,
      error: logoutError,
    },
  ] = useSendLogoutMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogoutSuccess) {
      navigate('/');
    }
  });

  if (isLoading || isLogoutLoading) {
    return <div>Loading...</div>;
  }

  if (isError || isLogoutError) {
    return (
      <div>
        <h1>Something went wrong...</h1>
        <p>{JSON.stringify(error || logoutError)}</p>
        <Link to="/">Go Home</Link>
      </div>
    );
  }

  if (isSuccess) {
    const { ids, entities } = data;

    return (
      <div style={{ padding: '1rem' }}>
        <h1
          style={{
            margin: '1rem auto',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          This page is for testing purposes only
        </h1>
        <button
          type="button"
          onClick={() => sendLogout()}
          style={{
            margin: '1rem',
            padding: ' 0.25rem 1rem',
            backgroundColor: 'red',
          }}
        >
          Log Out
        </button>
        <ul>
          {ids?.map((userId: EntityId) => (
            <li key={userId}>{JSON.stringify(entities[userId])}</li>
          ))}
        </ul>
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default UsersPage;
