import React from 'react';
import classes from './HStack.module.css';

export const HStack = ({ children, spacing = 2 }) => (
  <div className={classes.hstack} style={{ gap: `${spacing * 4}px` }}>
    {children}
  </div>
);
