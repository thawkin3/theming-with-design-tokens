import React from 'react';
import { useTheme } from './components/ThemeContext';
import { Button } from './components/Button';
import { HStack } from './components/HStack';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { VStack } from './components/VStack';
import classes from './App.module.css';

const App = () => {
  const { theme, switchTheme } = useTheme();

  return (
    <main className={classes.main}>
      <Text as="h1">Current Theme: {theme}</Text>
      <VStack spacing={8}>
        <HStack>
          <Button
            aria-pressed={theme === 'light'}
            onClick={() => switchTheme('light')}
          >
            Light Theme
          </Button>
          <Button
            aria-pressed={theme === 'dark'}
            onClick={() => switchTheme('dark')}
          >
            Dark Theme
          </Button>
        </HStack>
        <TextInput id="username" label="Username" />
        <TextInput id="password" label="Password" type="password" />
        <HStack>
          <Button colorVariant="primary">Log in</Button>
        </HStack>
      </VStack>
    </main>
  );
};

export default App;
