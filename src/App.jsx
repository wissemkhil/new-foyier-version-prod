import React from 'react';
import { ThemeContextProvider } from './context/ThemeContext';
import { LanguageContextProvider } from './context/LanguageContext';
import ErrorBoundary from './components/ErrorBoundary';
import AppRouter from './router/AppRouter';
import './i18n/i18n';

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeContextProvider>
        <LanguageContextProvider>
          <AppRouter />
        </LanguageContextProvider>
      </ThemeContextProvider>
    </ErrorBoundary>
  );
};

export default App;
