# Web Carla - Portfolio Cinematográfico

Portfolio personal dinámico construido con Astro y React, con modo oscuro, soporte multiidioma y diseño futurista.

## 🚀 Características

- ✨ Diseño dinámico con contrastes blanco y negro
- 🌓 Modo oscuro/claro
- 🌍 Multiidioma (Español/Inglés)
- 🎬 Video de fondo en la página principal
- 💫 Animaciones y transiciones suaves
- 🎨 Botones futuristas redondeados
- 📱 Diseño responsive
- ⚡ Rendimiento optimizado con Astro

## 🛠️ Stack Tecnológico

- **Astro 5.x** - Framework principal
- **React 19.x** - Componentes interactivos
- **TypeScript** - Type safety
- **CSS3** - Estilos personalizados
- **ESLint** - Linting
- **Prettier** - Formateo de código
- **Fuente Comfortaa** - Tipografía

## 📁 Estructura del Proyecto

```
web-carla/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── LanguageToggle.tsx
│   │   └── VideoBackground.tsx
│   ├── layouts/
│   │   └── Layout.astro     # Layout principal
│   ├── pages/               # Páginas de la web
│   │   ├── index.astro      # Home
│   │   ├── portfolio.astro  # Portfolio
│   │   ├── bio.astro        # Biografía
│   │   └── contact.astro    # Contacto
│   ├── styles/              # Estilos CSS
│   │   ├── global.css
│   │   ├── Header.css
│   │   ├── Footer.css
│   │   ├── ThemeToggle.css
│   │   ├── LanguageToggle.css
│   │   └── VideoBackground.css
│   ├── types/
│   │   └── index.ts         # Tipos TypeScript
│   └── utils/
│       └── i18n.ts          # Internacionalización
├── public/
│   └── videos/              # Videos para el home
├── agents.md                # Documentación del proyecto
├── .eslintrc.cjs
├── .prettierrc
├── astro.config.mjs
└── package.json
```

## 🚀 Comandos

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📝 Configuración del Video de Fondo

Para agregar tu video de fondo:

1. Coloca tu archivo de video en `/public/videos/`
2. Renómbralo como `background.mp4` o actualiza la ruta en `VideoBackground.tsx`
3. Se recomienda un video optimizado para web (formato MP4, H.264)

## 🎨 Personalización

### Colores

Los colores se pueden personalizar en `src/styles/global.css`:

```css
:root {
  --color-bg: #ffffff;
  --color-text: #000000;
  --color-accent: #000000;
  /* ... más variables */
}
```

### Traducciones

Para agregar o modificar traducciones, edita `src/utils/i18n.ts`.

## 📱 Secciones

- **Home**: Página principal con video de fondo a pantalla completa
- **Portfolio**: Galería de proyectos (Films, Artículos Académicos, Crítica Cinematográfica)
- **Bio**: Información biográfica y descarga de CV
- **Contacto**: Información de contacto y formulario

## 🔧 Desarrollo

El proyecto está configurado con:

- TypeScript en modo strict
- ESLint para análisis de código
- Prettier para formateo consistente
- Configuración para React y Astro

## � Despliegue

Este proyecto puede desplegarse en cualquier plataforma que soporte sitios estáticos:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 👤 Autor

Carla

## 📄 Licencia

Todos los derechos reservados © 2025
