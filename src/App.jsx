import './App.css';

import React from 'react';
import { useTheme } from './components/ThemeContext';
import { Button } from './components/Button';

const App = () => {
  const { theme, switchTheme } = useTheme();

  return (
    <div>
      <h1>
        Current Theme:{' '}
        {theme === 'light' ? 'Light' : theme === 'dark' ? 'Dark' : 'Blue'}
      </h1>
      <Button onClick={() => switchTheme('light')}>Light Theme</Button>
      <Button onClick={() => switchTheme('dark')}>Dark Theme</Button>
      <Button onClick={() => switchTheme('blue')}>Blue Theme</Button>
    </div>
  );
};

export default App;
