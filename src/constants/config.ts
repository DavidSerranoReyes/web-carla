/**
 * Configuración centralizada de constantes de la aplicación
 * Aquí van URLs, valores, configuraciones que se repiten
 */

export const VIDEO_DEFAULTS = {
  autoplay: 1,
  allowFullscreen: true,
  controls: true,
} as const;

export const IMAGE_DEFAULTS = {
  quality: 80,
  maxWidth: 1920,
  formats: ['webp', 'jpg'] as const,
} as const;

// Labels por defecto para FilmCard
export const FILM_CARD_LABELS = {
  videoLabel: 'Teaser',
  videoLabelEn: 'Teaser',
  infoLabel: 'Información destacada',
  infoLabelEn: 'Featured Information',
  pdfLabel: 'Ficha Completa',
  pdfLabelEn: 'Full Info',
} as const;

// Labels por defecto para ArticleCard
export const ARTICLE_CARD_LABELS = {
  readMore: 'Leer más',
  readMoreEn: 'Read More',
  published: 'Publicado',
  publishedEn: 'Published',
} as const;

// Labels por defecto para CriticismCard
export const CRITICISM_CARD_LABELS = {
  readReview: 'Leer crítica',
  readReviewEn: 'Read Review',
  rating: 'Calificación',
  ratingEn: 'Rating',
} as const;
