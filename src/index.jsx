import React from 'react';
import { unstable_createRoot } from 'react-dom';
import 'assets/kernel.styles.css';
import AppContainer from './App.container';

unstable_createRoot(document.getElementById('root')).render(<AppContainer />);
