import React from 'react';
import classes from './Text.module.css';

export const Text = ({ children, colorVariant = 'primary' }) => (
  <span className={classes[colorVariant]}>{children}</span>
);
