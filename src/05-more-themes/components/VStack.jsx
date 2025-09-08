import React from 'react';
import cx from 'classnames';
import classes from './VStack.module.css';

export const VStack = ({ children, className, spacing = 2 }) => (
  <div
    className={cx(classes.vstack, className)}
    style={{ gap: `${spacing * 4}px` }}
  >
    {children}
  </div>
);
