import { useState, useEffect } from 'react';
import type { Theme } from '../types';

/**
 * Hook para obtener el tema actual (dark/light)
 * Escucha cambios en el data-theme del HTML
 *
 * Uso:
 * const theme = useTheme();
 * // theme es 'dark' o 'light'
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const updateTheme = () => {
      const html = document.documentElement;
      const currentTheme = (html.getAttribute('data-theme') as Theme) || 'dark';
      setTheme(currentTheme);
    };

    updateTheme();

    // Usar MutationObserver para detectar cambios en data-theme
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return theme;
}
