import { createContext, ReactNode, useState } from 'react';

const defaultValue = {
  theme: 'light',
  toggleTheme: () => {},
};

const ThemeContext = createContext(defaultValue);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
