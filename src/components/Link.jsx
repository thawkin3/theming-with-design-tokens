import React from 'react';
import classes from './Link.module.css';

export const Link = ({ children, href }) => (
  <a className={classes.link} href={href}>
    {children}
  </a>
);
