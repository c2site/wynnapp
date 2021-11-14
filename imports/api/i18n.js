import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import en from '../../public/locales/en/translation.json';
import cn from '../../public/locales/cn/translation.json';

i18n
    // Подключение бэкенда i18next
    .use(Backend)
    // Автоматическое определение языка
    .use(LanguageDetector)
    // модуль инициализации
    .use (initReactI18next)
    .init({
        // Стандартный язык
        resources: {en: {translation: en}, cn: {translation: cn}},
        whitelist: ['en', 'cn'],
        fallbackLng: {
            'default': ['en'],
        },
        debug: true,
        // Распознавание и кэширование языковых кук
        detection: {
            order: ['queryString', 'cookie'],
            cache: ['cookie']
        },
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false
        }
    })

export default i18n;