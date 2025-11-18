/**
 * Utilidades para manejo de videos (YouTube y Vimeo)
 * Centraliza toda la lógica de video en un lugar reutilizable
 */

const VIDEO_PROVIDERS = {
  VIMEO: 'vimeo.com',
  YOUTUBE: 'youtube.com',
} as const;

const VIDEO_URLS = {
  VIMEO_EMBED: 'https://player.vimeo.com/video',
  YOUTUBE_EMBED: 'https://www.youtube.com/embed',
  YOUTUBE_THUMB: 'https://img.youtube.com/vi',
  VIMEO_THUMB: 'https://i.vimeocdn.com/video/default_640x360.jpg',
} as const;

/**
 * Verifica si una URL es de Vimeo
 */
export function isVimeo(url: string): boolean {
  return url.includes(VIDEO_PROVIDERS.VIMEO);
}

/**
 * Extrae el ID de video de una URL (YouTube o Vimeo)
 */
export function extractVideoId(url: string): string | null {
  if (isVimeo(url)) {
    return url.split('vimeo.com/')[1]?.split('?')[0] || null;
  }
  return url.split('v=')[1]?.split('&')[0] || null;
}

/**
 * Retorna la URL de embed para un video (con autoplay opcional)
 */
export function getEmbedUrl(url: string, autoplay = true): string {
  const videoId = extractVideoId(url);
  if (!videoId) return '';

  if (isVimeo(url)) {
    const params = autoplay ? '?autoplay=1' : '';
    return `${VIDEO_URLS.VIMEO_EMBED}/${videoId}${params}`;
  }

  const params = autoplay ? '?autoplay=1' : '';
  return `${VIDEO_URLS.YOUTUBE_EMBED}/${videoId}${params}`;
}

/**
 * Retorna la URL de thumbnail del video
 */
export function getThumbnail(url: string): string {
  if (isVimeo(url)) {
    return VIDEO_URLS.VIMEO_THUMB;
  }

  const videoId = extractVideoId(url);
  if (!videoId) return '';

  return `${VIDEO_URLS.YOUTUBE_THUMB}/${videoId}/maxresdefault.jpg`;
}
