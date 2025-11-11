import { useState, useEffect } from 'react';
import { getTranslation, getCurrentLanguage } from '../utils/i18n';
import type { Language } from '../types';

export default function ContactForm() {
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
    <div className="contact-form">
      <h2>{language === 'es' ? 'Enviar mensaje' : 'Send message'}</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">{language === 'es' ? 'Nombre' : 'Name'}</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">{language === 'es' ? 'Mensaje' : 'Message'}</label>
          <textarea id="message" name="message" rows={5} required></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          {language === 'es' ? 'Enviar' : 'Send'}
        </button>
      </form>
    </div>
  );
}
