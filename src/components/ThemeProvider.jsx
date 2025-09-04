// ThemeProvider using CSS variables
import React, { createContext, useState, useContext } from 'react';

// Define default themes with CSS variables
const defaultThemes = {
  light: {
    '--background': '#ffffff',
    '--color': '#333333',
  },
  dark: {
    '--background': '#333333',
    '--color': '#ffffff',
  },
  blue: {
    '--background': '#0099ff',
    '--color': '#ffffff',
  },
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultThemes.light);

  const switchTheme = (themeName) => {
    setTheme(defaultThemes[themeName] || defaultThemes.light);
  };

  // Set CSS variables when the theme changes
  React.useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
