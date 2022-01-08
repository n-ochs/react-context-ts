import React, { createContext, useContext, useState } from 'react';

// Types
interface IThemeContext {
  dark: boolean;
  toggleDark?: () => void;
}
interface IThemeUpdateContext {
  toggleDark?: () => void;
}

// Default State of Context - not always needed. See 'ThemeUpdateContext', where we pass an empty object
// as default value because 'toggleDark' is optional.
const defaultState: IThemeContext = {
  dark: false
};

// Defining Context
const ThemeContext = createContext<IThemeContext>(defaultState);
const ThemeUpdateContext = createContext<IThemeUpdateContext>({});

// Custom Hook
const useThemeContext: () => IThemeContext = () => {
  return useContext(ThemeContext);
};

const useThemeUpdateContext: () => IThemeUpdateContext = () => {
  return useContext(ThemeUpdateContext);
};

// React Component
const ThemeProvider: React.FC = ({ children }) => {
  const [dark, setDark] = useState<boolean>(defaultState.dark);

  const toggleDark: () => void = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider value={{ dark }}>
      <ThemeUpdateContext.Provider value={{ toggleDark }}>{children}</ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export { useThemeContext, useThemeUpdateContext };
export default ThemeProvider;
