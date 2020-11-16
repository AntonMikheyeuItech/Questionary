/* eslint-disable react/display-name */
import React, { useCallback } from 'react';
import App from './App';
import { ContextProvider, useGlobalContext } from 'context';

const AppContainer = () => {
  const {
      getUserDataAsync,
      contextState: { user, isAuthorized, isLoading }
  } = useGlobalContext();
  const userType = user ? user.type : "";
  const memoizedGetUserDataAsync = useCallback(getUserDataAsync, []);


  return <App
    getUserDataAsync={memoizedGetUserDataAsync}
    userType={userType}
    isAuthorized={isAuthorized}
    isLoading={isLoading}
  />

};

export default () => (
  <ContextProvider>
    <AppContainer />
  </ContextProvider>
);
