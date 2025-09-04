import React from 'react';
import './Button.css';

export const Button = ({children, onClick, type = 'button'}) => (
  <button className="button" onClick={onClick} type={type}>{children}</button>
);
