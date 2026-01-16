import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'expo-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';

import en from './locales/en.json';
import de from './locales/de.json';
import es from './locales/es.json';
import it from './locales/it.json';
import te from './locales/te.json';

const resources = {
  en: { translation: en },
  de: { translation: de },
  es: { translation: es },
  it: { translation: it },
  te: { translation: te },
};

const initI18n = async () => {
  let savedLanguage = await AsyncStorage.getItem('language');

  if (!savedLanguage) {
    const deviceLanguage = getLocales()[0]?.languageCode;
    savedLanguage = deviceLanguage || 'en';
  }

  i18n.use(initReactI18next).init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: 'v4', // v4 is required for newer i18next types
  });
};

initI18n();

export default i18n;
