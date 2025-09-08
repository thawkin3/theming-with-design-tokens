import React from 'react';
import cx from 'classnames';
import classes from './HStack.module.css';

export const HStack = ({ children, className, spacing = 2 }) => (
  <div
    className={cx(classes.hstack, className)}
    style={{ gap: `${spacing * 4}px` }}
  >
    {children}
  </div>
);
