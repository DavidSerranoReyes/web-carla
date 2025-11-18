import { useState, useEffect } from 'react';
import { getCurrentLanguage } from '../utils/i18n';
import type { Language } from '../types';

interface FilmCardProps {
  title: string;
  titleEn: string;
  year: string;
  duration: string;
  country: string;
  posterImage: string;
  galleryImages: string[];
  synopsis: string;
  synopsisEn: string;
  director: string;
  festivals: string[];
  festivalsEn: string[];
  pdfUrl: string;
  trailerUrl?: string;
  fullFilmUrl?: string;
  videoLabel?: string;
  videoLabelEn?: string;
  infoLabel?: string;
  infoLabelEn?: string;
  pdfLabel?: string;
  pdfLabelEn?: string;
}

export default function FilmCard({
  title,
  titleEn,
  year,
  duration,
  country,
  posterImage,
  galleryImages,
  synopsis,
  synopsisEn,
  director,
  festivals,
  festivalsEn,
  pdfUrl,
  trailerUrl,
  fullFilmUrl,
  videoLabel = 'Teaser',
  videoLabelEn = 'Teaser',
  infoLabel = 'Información destacada',
  infoLabelEn = 'Featured Information',
  pdfLabel = 'Ficha Completa',
  pdfLabelEn = 'Full Info',
}: FilmCardProps) {
  const [language, setLanguage] = useState<Language>('es');
  const [showTrailer, setShowTrailer] = useState(false);

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

  const openPDF = () => {
    window.open(pdfUrl, '_blank');
  };

  const openFullFilm = () => {
    if (fullFilmUrl) {
      window.open(fullFilmUrl, '_blank');
    }
  };

  const isVimeo = (url: string) => {
    return url.includes('vimeo.com');
  };

  const getVideoEmbedUrl = (url: string) => {
    if (isVimeo(url)) {
      const videoId = url.split('vimeo.com/')[1]?.split('?')[0];
      return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
    } else {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
  };

  const getVideoThumbnail = (url: string) => {
    if (isVimeo(url)) {
      // Para Vimeo usamos una imagen placeholder o podrías usar la API de Vimeo
      return `https://i.vimeocdn.com/video/default_640x360.jpg`;
    } else {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
  };

  return (
    <article className="film-card">
      {/* Poster principal - más grande */}
      <div className="film-poster-large">
        <img src={posterImage} alt={title} loading="eager" fetchPriority="high" decoding="async" />
        <div className="film-overlay">
          <h2 className="film-title">{language === 'es' ? title : titleEn}</h2>
          <p className="film-meta">
            {country} | {year} | {duration}
          </p>
          <p className="film-director">
            {language === 'es' ? 'Dirección' : 'Director'}: {director}
          </p>
        </div>
      </div>

      <div className="film-content">
        {/* Galería de imágenes */}
        {galleryImages.length > 0 && (
          <div className="film-gallery">
            {galleryImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${title} - ${index + 1}`}
                className="gallery-thumb"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        )}

        {/* Contenido centrado */}
        <div className="film-info-center">
          {/* Sinopsis */}
          <div className="film-section">
            <h3>{language === 'es' ? 'Sinopsis' : 'Synopsis'}</h3>
            <p className="film-synopsis">{language === 'es' ? synopsis : synopsisEn}</p>
          </div>

          {/* Festivales y Premios */}
          <div className="film-section">
            <h3>{language === 'es' ? infoLabel : infoLabelEn}</h3>
            <ul className="film-festivals">
              {(language === 'es' ? festivals : festivalsEn).map((festival, index) => (
                <li key={index}>{festival}</li>
              ))}
            </ul>
          </div>

          {/* Trailer en miniatura */}
          {trailerUrl && (
            <div className="film-section">
              <h3>{language === 'es' ? videoLabel : videoLabelEn}</h3>
              {!showTrailer ? (
                <div className="trailer-thumbnail" onClick={() => setShowTrailer(true)}>
                  <img
                    src={getVideoThumbnail(trailerUrl)}
                    alt="Trailer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="play-button">
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="40" cy="40" r="40" fill="rgba(255, 255, 255, 0.9)" />
                      <path d="M32 25L55 40L32 55V25Z" fill="#000" />
                    </svg>
                  </div>
                </div>
              ) : (
                <div className="trailer-embed">
                  <iframe
                    src={getVideoEmbedUrl(trailerUrl)}
                    title="Video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Botones de acción - más compactos */}
        <div className="film-actions">
          <button onClick={openPDF} className="btn-action">
            📄 {language === 'es' ? pdfLabel : pdfLabelEn}
          </button>

          {fullFilmUrl && (
            <button onClick={openFullFilm} className="btn-action">
              🎬 {language === 'es' ? 'Ver Film Completo' : 'Watch Full Film'}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
