import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ThemeContextProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children } : {children : ReactNode}) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
    useEffect(() => {
      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme('dark');
        document.documentElement.classList.add('dark')
      } else {
        setTheme('light');
        document.documentElement.classList.remove('dark')
      }
    }, [theme]);
  
    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      setTheme(newTheme);
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  