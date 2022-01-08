import React from 'react';
import ThemeProvider from './ThemeContext';
import ToggleDarkMode from './ToggleDarkMode';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider>
        <ToggleDarkMode />
      </ThemeProvider>
    </>
  );
};

export default App;
