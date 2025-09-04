import React from 'react';
import classes from './TextInput.module.css';

export const TextInput = ({ id, label, onChange, type = 'text', value }) => (
  <>
    <label htmlFor={id}>{label}</label>
    <input id={id} onChange={onChange} type={type} value={value} />
  </>
);
