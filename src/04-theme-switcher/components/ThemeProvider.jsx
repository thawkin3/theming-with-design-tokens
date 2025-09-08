import React from 'react';
import { ThemeContext } from './ThemeContext';
import '../themes';

const defaultThemes = {
  light: 'light',
  dark: 'dark',
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(defaultThemes.light);

  const switchTheme = (themeName) => {
    setTheme(defaultThemes[themeName] || defaultThemes.light);
  };

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
