import React from 'react';
import classes from './VStack.module.css';

export const VStack = ({ children, spacing = 2 }) => (
  <div className={classes.vstack} style={{ gap: `${spacing * 4}px` }}>
    {children}
  </div>
);
