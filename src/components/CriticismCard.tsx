import { useState, useEffect } from 'react';
import { getCurrentLanguage } from '../utils/i18n';
import type { Language } from '../types';

interface CriticismCardProps {
  title: string;
  titleEn: string;
  filmTitle: string;
  filmTitleEn?: string;
  publication: string;
  publicationEn?: string;
  date: string;
  excerpt: string;
  excerptEn: string;
  url: string;
  thumbnail?: string;
}

export default function CriticismCard({
  title,
  titleEn,
  filmTitle,
  filmTitleEn,
  publication,
  publicationEn,
  date,
  excerpt,
  excerptEn,
  url,
  thumbnail,
}: CriticismCardProps) {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    const updateLanguage = () => {
      const lang = getCurrentLanguage();
      setLanguage(lang);
    };

    updateLanguage();
    window.addEventListener('storage', updateLanguage);

    return () => {
      window.removeEventListener('storage', updateLanguage);
    };
  }, []);

  return (
    <article className="criticism-card">
      {thumbnail && (
        <div className="criticism-thumbnail">
          <img src={thumbnail} alt={language === 'es' ? filmTitle : filmTitleEn || filmTitle} />
        </div>
      )}

      <div className="criticism-content">
        <h3 className="criticism-title">{language === 'es' ? title : titleEn}</h3>

        <p className="criticism-film-title">
          <strong>{language === 'es' ? 'Película:' : 'Film:'}</strong>{' '}
          {language === 'es' ? filmTitle : filmTitleEn || filmTitle}
        </p>

        <div className="criticism-meta">
          <p className="criticism-publication">
            {language === 'es' ? publication : publicationEn || publication}
          </p>
          <p className="criticism-date">{date}</p>
        </div>

        <p className="criticism-excerpt">{language === 'es' ? excerpt : excerptEn}</p>

        <div className="criticism-actions">
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            {language === 'es' ? 'Leer crítica completa' : 'Read full review'}
          </a>
        </div>
      </div>
    </article>
  );
}
