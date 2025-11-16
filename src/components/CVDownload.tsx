import { useState, useEffect } from 'react';
import { getCurrentLanguage } from '../utils/i18n';
import type { Language } from '../types';

export default function CVDownload() {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    // Cargar idioma actual
    const updateLanguage = () => {
      const lang = getCurrentLanguage();
      setLanguage(lang);
    };

    updateLanguage();

    // Escuchar cambios de idioma (cuando se recarga la página)
    window.addEventListener('storage', updateLanguage);

    return () => {
      window.removeEventListener('storage', updateLanguage);
    };
  }, []);

  const handleCVClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const base = import.meta.env.BASE_URL;
    const pdfUrl =
      language === 'es' ? `${base}CV_CarlaLarreaS2025.pdf` : `${base}CarlaLS_CV_English.pdf`;

    // Abrir en nueva pestaña
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="cv-buttons">
      {language === 'es' ? (
        <a
          href={`${import.meta.env.BASE_URL}CV_CarlaLarreaS2025.pdf`}
          className="btn btn-primary cv-btn"
          onClick={handleCVClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          Ver / Descargar CV
        </a>
      ) : (
        <a
          href={`${import.meta.env.BASE_URL}CarlaLS_CV_English.pdf`}
          className="btn btn-primary cv-btn"
          onClick={handleCVClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          View / Download CV
        </a>
      )}
    </div>
  );
}
