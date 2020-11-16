import React, { useCallback } from 'react';
import LogIn from './login';
import { useGlobalContext } from 'context';

const LoginContainer = () => {
  const { authAsync } = useGlobalContext();

  const memoized = useCallback(authAsync, []);

  return <LogIn authAsync={memoized} />
};

export default LoginContainer;
