import { useState, useEffect } from 'react';
import type { Language } from '../types';
import '../styles/LanguageToggle.css';

export default function LanguageToggle() {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    // Cargar idioma del localStorage
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      setLanguage(savedLang);
    } else {
      // Detectar idioma del navegador
      const browserLang = navigator.language.startsWith('es') ? 'es' : 'en';
      setLanguage(browserLang);
      localStorage.setItem('language', browserLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang: Language = language === 'es' ? 'en' : 'es';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);

    // Disparar evento personalizado para que otros componentes se actualicen
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: newLang }));

    // Recargar la página para aplicar el nuevo idioma
    window.location.reload();
  };

  return (
    <button
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === 'es' ? 'English' : 'Español'}`}
    >
      {language === 'es' ? 'EN' : 'ES'}
    </button>
  );
}
