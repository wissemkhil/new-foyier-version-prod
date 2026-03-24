import React, { createContext, useState, useMemo, useContext } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import lightTheme from '../theme/lightTheme';
import darkTheme from '../theme/darkTheme';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

// LTR cache
const cacheLtr = createCache({ key: 'muiltr' });

// RTL cache — only use rtlPlugin without prefixer to avoid the crash
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState('light');
  const [direction, setDirection] = useState('ltr');

  const toggleMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => {
    const baseTheme = mode === 'light' ? lightTheme : darkTheme;
    return {
      ...baseTheme,
      direction,
    };
  }, [mode, direction]);

  const cache = direction === 'rtl' ? cacheRtl : cacheLtr;

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, direction, setDirection }}>
      <CacheProvider value={cache}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </CacheProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

