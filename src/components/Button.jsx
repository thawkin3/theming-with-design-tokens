import React from 'react';
import cx from 'classnames';
import classes from './Button.module.css';

export const Button = ({
  children,
  colorVariant = 'default',
  onClick,
  type = 'button',
  ...props
}) => (
  <button
    className={cx(classes.button, classes[colorVariant])}
    onClick={onClick}
    type={type}
    {...props}
  >
    {children}
  </button>
);
