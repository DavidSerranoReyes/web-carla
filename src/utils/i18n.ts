import type { Translation, Language } from '../types';

const translations: Record<Language, Translation> = {
  es: {
    nav: {
      home: 'Inicio',
      portfolio: 'Portfolio',
      bio: 'Bio',
      contact: 'Contacto',
    },
    home: {
      title: 'Bienvenidos',
      subtitle: 'Portfolio Cinematográfico',
    },
    portfolio: {
      title: 'Portfolio',
      films: 'Films',
      articles: 'Artículos Académicos',
      criticism: 'Crítica Cinematográfica',
    },
    bio: {
      title: 'Biografía',
      downloadCV: 'Descargar CV',
      gallery: 'Galería',
    },
    contact: {
      title: 'Contacto',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
    },
  },
  en: {
    nav: {
      home: 'Home',
      portfolio: 'Portfolio',
      bio: 'Bio',
      contact: 'Contact',
    },
    home: {
      title: 'Welcome',
      subtitle: 'Cinematographic Portfolio',
    },
    portfolio: {
      title: 'Portfolio',
      films: 'Films',
      articles: 'Academic Articles',
      criticism: 'Film Criticism',
    },
    bio: {
      title: 'Biography',
      downloadCV: 'Download CV',
      gallery: 'Gallery',
    },
    contact: {
      title: 'Contact',
      email: 'Email',
      phone: 'Phone',
    },
  },
};

export function getTranslation(lang: Language): Translation {
  return translations[lang] || translations.es;
}

export function getCurrentLanguage(): Language {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('language') as Language;
    if (stored && (stored === 'es' || stored === 'en')) {
      return stored;
    }
    return navigator.language.startsWith('es') ? 'es' : 'en';
  }
  return 'es';
}

export function setLanguage(lang: Language): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
  }
}
