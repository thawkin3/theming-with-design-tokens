import React from 'react';
import { VStack } from './VStack';
import classes from './TextInput.module.css';

export const TextInput = ({ id, label, onChange, type = 'text', value }) => (
  <VStack>
    <label htmlFor={id}>{label}</label>
    <input id={id} onChange={onChange} type={type} value={value} />
  </VStack>
);
