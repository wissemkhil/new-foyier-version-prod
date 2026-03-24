import React, { createContext, useContext, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useThemeContext } from './ThemeContext';

const LanguageContext = createContext();

export const useLanguageContext = () => useContext(LanguageContext);

export const LanguageContextProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const { setDirection } = useThemeContext();

  const currentLanguage = i18n.language;

  const changeLanguage = useCallback(
    (lang) => {
      i18n.changeLanguage(lang);
      const dir = lang === 'ar' ? 'rtl' : 'ltr';
      setDirection(dir);
      document.documentElement.dir = dir;
      document.documentElement.lang = lang;
    },
    [i18n, setDirection]
  );

  const languages = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ar', label: 'عربي', flag: '🇹🇳' },
  ];

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
