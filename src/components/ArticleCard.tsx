import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface ArticleCardProps {
  title: string;
  titleEn: string;
  journal: string;
  journalEn?: string;
  year: string;
  authors: string[];
  abstract: string;
  abstractEn: string;
  keywords: string[];
  keywordsEn: string[];
  pdfUrl?: string;
  externalUrl?: string;
  thumbnail?: string;
}

export default function ArticleCard({
  title,
  titleEn,
  journal,
  journalEn,
  year,
  authors,
  abstract,
  abstractEn,
  keywords,
  keywordsEn,
  pdfUrl,
  externalUrl,
  thumbnail,
}: ArticleCardProps) {
  const language = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className="article-card">
      {thumbnail && (
        <div className="article-thumbnail">
          <img src={thumbnail} alt={language === 'es' ? title : titleEn} />
        </div>
      )}

      <div className="article-content">
        <h3 className="article-title">{language === 'es' ? title : titleEn}</h3>

        <div className="article-meta">
          <p className="article-journal">{language === 'es' ? journal : journalEn || journal}</p>
          <p className="article-year">{year}</p>
          <p className="article-authors">{authors.join(', ')}</p>
        </div>

        <div className={`article-abstract ${isExpanded ? 'expanded' : ''}`}>
          <p>{language === 'es' ? abstract : abstractEn}</p>
        </div>

        {(abstract.length > 200 || abstractEn.length > 200) && (
          <button onClick={handleReadMore} className="btn-read-more">
            {isExpanded
              ? language === 'es'
                ? 'Ver menos'
                : 'Read less'
              : language === 'es'
                ? 'Leer más'
                : 'Read more'}
          </button>
        )}

        <div className="article-keywords">
          <strong>{language === 'es' ? 'Palabras clave:' : 'Keywords:'}</strong>{' '}
          {(language === 'es' ? keywords : keywordsEn).join(', ')}
        </div>

        <div className="article-actions">
          {pdfUrl && (
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              PDF
            </a>
          )}
          {externalUrl && (
            <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="btn">
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
              {language === 'es' ? 'Ver online' : 'View online'}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
