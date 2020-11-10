import React from 'react';
import { unstable_createRoot } from 'react-dom';

const App = () => (<h1>Hello World!</h1>);

unstable_createRoot(document.getElementById('root')).render(<App />);
