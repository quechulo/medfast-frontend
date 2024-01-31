// @ts-nocheck
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { useGetUserInfoQuery } from 'src/redux/auth/authApiSlice';
import { selectIsLoggingOut } from 'src/redux/auth/authSlice';

const PrivateRoutes: React.FC = () => {
  const isLoggingOut = useSelector(selectIsLoggingOut);

  // Create seperate cache entries for each time the component mounts
  // Propably not the most optimal solution, but it works
  const [timeOfMount] = useState(new Date().getTime());

  const {
    data: _userInfo,
    isLoading,
    isFetching,
    isSuccess,
  } = useGetUserInfoQuery({ at: timeOfMount }, {
    skip: isLoggingOut,
    refetchOnMountOrArgChange: true,
  });

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  if (isSuccess) {
    return <Outlet />;
  }

  return <Navigate to="/" />;
};

export default PrivateRoutes;
