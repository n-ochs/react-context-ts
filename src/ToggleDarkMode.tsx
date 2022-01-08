import React from 'react';
import { useThemeContext, useThemeUpdateContext } from './ThemeContext';

const ToggleDarkMode: React.FC = () => {
  const { dark } = useThemeContext();
  const { toggleDark } = useThemeUpdateContext();

  return (
    <>
      <h1>{dark ? '🌙' : '🌞'}</h1>
      <button onClick={toggleDark}>Toggle dark mode</button>
    </>
  );
};

export default ToggleDarkMode;
