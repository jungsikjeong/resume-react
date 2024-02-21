import { ReactNode, createContext, useState } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  toggleMode: () => {},
});

interface ThemeProps {
  children: ReactNode;
}

type ThemeType = 'lightTheme' | 'darkTheme';

export const ThemeContextProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState<ThemeType>(
    (localStorage.getItem('theme') as ThemeType) || 'lightTheme'
  );

  const toggleMode = () => {
    setTheme((prev) => (prev === 'lightTheme' ? 'darkTheme' : 'lightTheme'));
    localStorage.setItem(
      'theme',
      theme === 'lightTheme' ? 'darkTheme' : 'lightTheme'
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
