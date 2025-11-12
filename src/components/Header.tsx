import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { getTranslation, getCurrentLanguage } from '../utils/i18n';
import type { Translation } from '../types';
import '../styles/Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [translation, setTranslation] = useState<Translation | null>(null);

  useEffect(() => {
    // Cargar traducciones
    const lang = getCurrentLanguage();
    setTranslation(getTranslation(lang));

    // Detectar scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!translation) {
    return null;
  }

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <nav className="nav">
            <a href={import.meta.env.BASE_URL} className="nav-link">
              {translation.nav.home}
            </a>
            <a href={`${import.meta.env.BASE_URL}portfolio/`} className="nav-link">
              {translation.nav.portfolio}
            </a>
            <a href={`${import.meta.env.BASE_URL}bio/`} className="nav-link">
              {translation.nav.bio}
            </a>
            <a href={`${import.meta.env.BASE_URL}contact/`} className="nav-link">
              {translation.nav.contact}
            </a>
          </nav>
          <div className="header-actions">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
