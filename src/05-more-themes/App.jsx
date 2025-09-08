import React from 'react';
import { useTheme } from './components/ThemeContext';
import { Button } from './components/Button';
import { HStack } from './components/HStack';
import { Link } from './components/Link';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { VStack } from './components/VStack';
import classes from './App.module.css';

const App = () => {
  const { theme, switchTheme } = useTheme();

  return (
    <main className={classes.main}>
      <Text as="h1">Theming with Design Tokens</Text>
      <VStack spacing={8}>
        <HStack className={classes.themeSwitcher}>
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
          <Button
            aria-pressed={theme === 'glow'}
            onClick={() => switchTheme('glow')}
          >
            Glow Theme
          </Button>
        </HStack>
        <VStack className={classes.loginForm} spacing={4}>
          <TextInput id="username" label="Username" />
          <TextInput id="password" label="Password" type="password" />
          <Button colorVariant="primary">Log in</Button>
        </VStack>
        <HStack className={classes.signup}>
          <Text>Don't have an account?</Text>
          <Link href="#">Sign up</Link>
        </HStack>
      </VStack>
    </main>
  );
};

export default App;
