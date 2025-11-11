import { useState, useEffect } from 'react';
import { getTranslation, getCurrentLanguage } from '../utils/i18n';
import type { Language } from '../types';

export default function GallerySection() {
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

  const translation = getTranslation(language);

  return (
    <section className="bio-section gallery-section">
      <h2>{translation.bio.gallery}</h2>
      <div className="photo-gallery">
        <div className="gallery-item">
          <img
            src="/images/bio/gallery1.jpg"
            alt="Carla Larrea - Gallery 1"
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src="/images/bio/gallery2.jpg"
            alt="Carla Larrea - Gallery 2"
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src="/images/bio/gallery3.jpg"
            alt="Carla Larrea - Gallery 3"
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src="/images/bio/gallery4.jpg"
            alt="Carla Larrea - Gallery 4"
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src="/images/bio/gallery5.jpg"
            alt="Carla Larrea - Gallery 5"
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src="/images/bio/gallery6.jpg"
            alt="Carla Larrea - Gallery 6"
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src="/images/bio/gallery7.jpg"
            alt="Carla Larrea - Gallery 7"
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src="/images/bio/gallery8.jpg"
            alt="Carla Larrea - Gallery 8"
            className="gallery-image"
          />
        </div>
      </div>
    </section>
  );
}
