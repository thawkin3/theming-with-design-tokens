import React from 'react';
import classes from './Button.module.css';

export const Button = ({children, onClick, type = 'button'}) => (
  <button className={classes.button} onClick={onClick} type={type}>{children}</button>
);
