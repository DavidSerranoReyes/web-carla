import { useState, useEffect } from 'react';
import { getCurrentLanguage } from '../utils/i18n';
import type { Language } from '../types';

/**
 * Hook para obtener y escuchar cambios de idioma
 * Elimina la duplicación en componentes que necesitan lenguaje
 *
 * Uso:
 * const language = useLanguage();
 * // language es 'es' o 'en'
 */
export function useLanguage() {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    const updateLanguage = () => {
      setLanguage(getCurrentLanguage());
    };

    // Actualizar idioma al cargar
    updateLanguage();

    // Escuchar cambios de storage (cuando el usuario cambia idioma)
    window.addEventListener('storage', updateLanguage);

    return () => {
      window.removeEventListener('storage', updateLanguage);
    };
  }, []);

  return language;
}
