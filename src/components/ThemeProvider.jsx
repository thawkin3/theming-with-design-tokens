// ThemeProvider using CSS variables
import React, { useState } from 'react';
import {ThemeContext} from './ThemeContext';
import '../themes';

// Define default themes with CSS variables
const defaultThemes = {
  light: 'light',
  dark: 'dark',
  blue: 'blue',
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultThemes.light);

  const switchTheme = (themeName) => {
    setTheme(defaultThemes[themeName] || defaultThemes.light);
  };

  // Set CSS variables when the theme changes
  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
