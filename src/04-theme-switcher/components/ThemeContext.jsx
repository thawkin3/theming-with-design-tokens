import React from 'react';

export const ThemeContext = React.createContext();
export const useTheme = () => React.useContext(ThemeContext);
