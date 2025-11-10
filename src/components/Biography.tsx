import { useState, useEffect } from 'react';
import { getCurrentLanguage } from '../utils/i18n';
import type { Language } from '../types';

export default function Biography() {
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

  if (language === 'es') {
    return (
      <>
        <section className="bio-section">
          <h2>Sobre mí</h2>
          <p>
            Soy mujer, latinoamericana, andina, cineasta, activista por los derechos humanos con
            perspectiva de género interseccional, antirracista y decolonial. Soy directora, editora,
            productora y guionista. Considero al cine y el audiovisual como herramientas de posibles
            reflexiones y transformaciones sociales.
          </p>
        </section>

        <section className="bio-section">
          <h2>Formación Académica</h2>
          <div className="experience-item">
            <h3>Magíster en Derechos Humanos</h3>
            <p className="institution">
              Universidad Regional del Noroeste del Estado de Rio Grande do Sul
            </p>
            <p className="location">Brasil</p>
          </div>
          <div className="experience-item">
            <h3>Graduada del Centro de Capacitación Cinematográfica</h3>
            <p className="location">México</p>
          </div>
          <div className="experience-item">
            <h3>Residente de COOFILM - Segunda Edición</h3>
            <p className="location">España</p>
          </div>
        </section>

        <section className="bio-section">
          <h2>Trayectoria Cinematográfica</h2>
          <p>
            Desde 2018, he participado en diversos laboratorios y mercados de cine y audiovisual
            como directora, guionista y productora. He tenido el honor de ser jurado en varios
            premios y festivales:
          </p>
          <div className="achievements">
            <div className="achievement-item">
              <h4>Ecuador</h4>
              <ul>
                <li>Festival de Cine de Guayaquil</li>
                <li>Premio Ernesto Albán del Municipio de Quito</li>
              </ul>
            </div>
            <div className="achievement-item">
              <h4>Internacional</h4>
              <ul>
                <li>Ceceachero Film Festival</li>
                <li>8º CBFF Festival Internacional en Vigo</li>
                <li>FENACIR</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bio-section">
          <h2>Docencia e Investigación</h2>
          <div className="experience-item">
            <h3>Docente Universitaria</h3>
            <p className="date">Septiembre 2025 - Presente</p>
            <p className="institution">Universidad Politécnica Estatal del Carchi</p>
            <p>Carreras de Educación Básica y Educación Inicial</p>
            <p className="subjects">
              <strong>Asignaturas:</strong> Derechos Humanos | Derechos Humanos y Educación
            </p>
          </div>
        </section>

        <section className="bio-section">
          <h2>Enfoque Profesional</h2>
          <p>
            En mi ejercicio profesional articulo el arte, especialmente el cine, la academia y los
            Derechos Humanos para gestar proyectos sociales y cinematográficos interseccionales e
            interdisciplinarios desde una perspectiva decolonial, anticapitalista y antipatriarcal.
          </p>
        </section>
      </>
    );
  }

  // English version
  return (
    <>
      <section className="bio-section">
        <h2>About Me</h2>
        <p>
          I am a Latin American, Andean woman, a filmmaker, and a human rights activist with an
          intersectional gender, anti-racist, and decolonial perspective. I am a director, editor,
          producer, and screenwriter. I consider cinema and audiovisual media to be tools for
          potential social reflection and transformation.
        </p>
      </section>

      <section className="bio-section">
        <h2>Academic Background</h2>
        <div className="experience-item">
          <h3>Master's in Human Rights</h3>
          <p className="institution">
            Universidad Regional del Noroeste del Estado de Rio Grande do Sul
          </p>
          <p className="location">Brazil</p>
        </div>
        <div className="experience-item">
          <h3>Graduate of Centro de Capacitación Cinematográfica</h3>
          <p className="location">Mexico</p>
        </div>
        <div className="experience-item">
          <h3>COOFILM Resident - Second Edition</h3>
          <p className="location">Spain</p>
        </div>
      </section>

      <section className="bio-section">
        <h2>Film Career</h2>
        <p>
          Since 2018, I have participated in various film labs and markets as a director,
          screenwriter, and producer. I have had the honor of serving as a jury member for several
          awards and festivals:
        </p>
        <div className="achievements">
          <div className="achievement-item">
            <h4>Ecuador</h4>
            <ul>
              <li>Guayaquil Film Festival</li>
              <li>Ernesto Albán Award from the Municipality of Quito</li>
            </ul>
          </div>
          <div className="achievement-item">
            <h4>International</h4>
            <ul>
              <li>Ceceachero Film Festival</li>
              <li>8th CBFF International Festival in Vigo</li>
              <li>FENACIR</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bio-section">
        <h2>Teaching & Research</h2>
        <div className="experience-item">
          <h3>University Lecturer</h3>
          <p className="date">September 2025 - Present</p>
          <p className="institution">Universidad Politécnica Estatal del Carchi</p>
          <p>Early Childhood Education and Elementary Education Programs</p>
          <p className="subjects">
            <strong>Subjects:</strong> Human Rights | Human Rights and Education
          </p>
        </div>
      </section>

      <section className="bio-section">
        <h2>Professional Approach</h2>
        <p>
          In my professional practice, I integrate art—especially cinema—academia, and Human Rights
          to develop intersectional and interdisciplinary social and cinematic projects from a
          decolonial, anti-capitalist, and anti-patriarchal perspective.
        </p>
      </section>
    </>
  );
}
