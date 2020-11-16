import React, { useCallback } from 'react';
import Register from './register';
import { useGlobalContext } from 'context';

const RegisterContainer = () => {
  const { registerAsync } = useGlobalContext();

  const memoized = useCallback(registerAsync, []);

  return <Register registerAsync={memoized} />
};

export default RegisterContainer;
