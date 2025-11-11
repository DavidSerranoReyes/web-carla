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
      <div className="bio-content">
        <p>
          Soy mujer, latinoamericana, andina, cineasta, activista por los derechos humanos con
          perspectiva de género interseccional, antirracista y decolonial. Soy directora, editora,
          productora y guionista. Considero al cine y el audiovisual como herramientas de posibles
          reflexiones y transformaciones sociales.
        </p>

        <p>
          Soy graduada del Centro de Capacitación Cinematográfica (México) y Magíster en Derechos
          Humanos por la Universidad Regional del Noroeste del Estado de Rio Grande do Sul (Brasil).
          Fui residente de COOFILM, segunda edición (España), y he participado en varios
          laboratorios y mercados de cine y audiovisual desde el 2018, como directora, guionista y
          productora.
        </p>

        <p>
          He sido jurado de varios premios y festivales tanto en Ecuador (Festival de Cine de
          Guayaquil, Premio Ernesto Albán del Municipio de Quito) como en el extranjero (Ceceachero
          Film Festival, 8º CBFF Festival Internacional en Vigo, FENACIR).
        </p>

        <p>
          También me desempeño como investigadora y docente universitaria. Desde septiembre de 2025,
          trabajo como docente en las carreras de Educación Básica y Educación Inicial de la
          Universidad Politécnica Estatal del Carchi, dictando las asignaturas de Derechos Humanos y
          Derechos Humanos y Educación.
        </p>

        <p>
          En mi ejercicio profesional articulo el arte, especialmente el cine, la academia y los
          Derechos Humanos para gestar proyectos sociales y cinematográficos interseccionales e
          interdisciplinarios desde una perspectiva decolonial, anticapitalista y antipatriarcal.
        </p>
      </div>
    );
  }

  // English version
  return (
    <div className="bio-content">
      <p>
        I am a woman, Latin American, Andean, filmmaker, and human rights activist with an
        intersectional, anti-racist, and decolonial gender perspective. I am a director, editor,
        producer, and screenwriter. I consider cinema and audiovisual media as tools for possible
        reflections and social transformations.
      </p>

      <p>
        I graduated from the Centro de Capacitación Cinematográfica (Mexico) and hold a Master's
        degree in Human Rights from the Regional University of Northwestern Rio Grande do Sul
        (Brazil). I was a resident of COOFILM, second edition (Spain), and have participated in
        various film and audiovisual laboratories and markets since 2018, as a director,
        screenwriter, and producer.
      </p>

      <p>
        I have served as a jury member for several awards and festivals both in Ecuador (Guayaquil
        Film Festival, Ernesto Albán Award from the Municipality of Quito) and abroad (Ceceachero
        Film Festival, 8º CBFF International Festival in Vigo, FENACIR).
      </p>

      <p>
        I also work as a researcher and university professor. Since September 2025, I have been
        teaching in the Basic Education and Early Childhood Education programs at the State
        Polytechnic University of Carchi, delivering courses on Human Rights and Human Rights and
        Education.
      </p>

      <p>
        In my professional practice, I articulate art, especially cinema, academia, and Human Rights
        to create intersectional and interdisciplinary social and cinematographic projects from a
        decolonial, anti-capitalist, and anti-patriarchal perspective.
      </p>
    </div>
  );
}
