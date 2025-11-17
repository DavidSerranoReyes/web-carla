import { useState, useEffect } from 'react';
import { getTranslation, getCurrentLanguage } from '../utils/i18n';
import type { Language } from '../types';
import '../styles/ContactForm.css';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [language, setLanguage] = useState<Language>('es');
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      // Usar FormSubmit.co - Reemplaza 'your-email@example.com' con tu email real
      const response = await fetch('https://formsubmit.co/ajax/carla.larreas@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject:
            language === 'es'
              ? `Nuevo mensaje de ${formData.name} desde tu web`
              : `New message from ${formData.name} from your website`,
          _captcha: 'false', // Desactiva captcha para testing, actívalo en producción
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus('idle');
        }, 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      setFormStatus('error');
    }
  };

  const translation = getTranslation(language);

  return (
    <div className="contact-form">
      <h2>{language === 'es' ? 'Enviar mensaje' : 'Send message'}</h2>

      {formStatus === 'success' && (
        <div className="form-alert form-success">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <p>
            {language === 'es'
              ? '¡Mensaje enviado con éxito! Te responderé pronto.'
              : 'Message sent successfully! I will reply soon.'}
          </p>
        </div>
      )}

      {formStatus === 'error' && (
        <div className="form-alert form-error">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <p>
            {language === 'es'
              ? 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.'
              : 'There was an error sending the message. Please try again.'}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{language === 'es' ? 'Nombre *' : 'Name *'}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={formStatus === 'submitting'}
            placeholder={language === 'es' ? 'Tu nombre' : 'Your name'}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={formStatus === 'submitting'}
            placeholder={language === 'es' ? 'tu@email.com' : 'your@email.com'}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">{language === 'es' ? 'Mensaje *' : 'Message *'}</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            disabled={formStatus === 'submitting'}
            placeholder={
              language === 'es' ? 'Escribe tu mensaje aquí...' : 'Write your message here...'
            }
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary" disabled={formStatus === 'submitting'}>
          {formStatus === 'submitting' ? (
            <>
              <svg
                className="spinner"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" opacity="0.25"></circle>
                <path d="M12 2a10 10 0 0 1 10 10" opacity="0.75"></path>
              </svg>
              {language === 'es' ? 'Enviando...' : 'Sending...'}
            </>
          ) : (
            <>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              {language === 'es' ? 'Enviar mensaje' : 'Send message'}
            </>
          )}
        </button>
      </form>
    </div>
  );
}
