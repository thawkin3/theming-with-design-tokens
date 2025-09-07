import React from 'react';
import classes from './Text.module.css';

export const Text = ({ as = 'span', children, colorVariant = 'primary' }) => {
  const TextComponent = as;
  return (
    <TextComponent className={classes[colorVariant]}>{children}</TextComponent>
  );
};
