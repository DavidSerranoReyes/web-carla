# Web Carla - Proyecto de Portfolio Personal

## Descripción del Proyecto

Web dinámica de portfolio personal construida con Astro y React, con soporte multiidioma (Español/Inglés), modo oscuro y diseño futurista.

## Stack Tecnológico

- **Framework Principal**: Astro 5.x
- **UI Framework**: React 19.x
- **Lenguaje**: TypeScript (strict mode)
- **Estilos**: CSS personalizado
- **Linting**: ESLint
- **Formateo**: Prettier
- **Fuentes**: Comfortaa

## Estructura del Proyecto

```
web-carla/
├── src/
│   ├── components/          # Componentes React reutilizables
│   │   ├── Header.tsx       # Navegación principal
│   │   ├── Footer.tsx       # Pie de página
│   │   ├── LanguageToggle.tsx  # Selector de idioma
│   │   ├── ThemeToggle.tsx     # Toggle modo oscuro
│   │   └── VideoBackground.tsx # Fondo de video
│   ├── layouts/
│   │   └── Layout.astro     # Layout principal
│   ├── pages/
│   │   ├── index.astro      # Home con video de fondo
│   │   ├── portfolio.astro  # Portfolio (films, artículos, crítica)
│   │   ├── bio.astro        # Biografía y descarga CV
│   │   └── contact.astro    # Información de contacto
│   ├── styles/
│   │   └── global.css       # Estilos globales
│   ├── types/
│   │   └── index.ts         # Tipos TypeScript
│   └── utils/
│       └── i18n.ts          # Utilidades de internacionalización
├── public/
│   └── videos/              # Videos para el home
├── agents.md                # Este archivo
├── .eslintrc.cjs           # Configuración ESLint
├── .prettierrc             # Configuración Prettier
├── astro.config.mjs        # Configuración Astro
├── package.json
├── tsconfig.json
└── README.md
```

## Características de Diseño

- **Paleta de Colores**: Blanco y negro con contrastes
- **Modo Oscuro**: Implementado por defecto
- **Botones**: Estilo futurista redondeado
- **Transiciones**: Múltiples transiciones suaves
- **Fuente Principal**: Comfortaa
- **Video de Fondo**: Pantalla completa en home

## Secciones de la Web

### 1. Home

- Video de fondo a pantalla completa
- Navegación principal
- Toggle de idioma y modo oscuro

### 2. Portfolio

- **Films**: Galería de proyectos cinematográficos
- **Artículos Académicos**: Publicaciones y papers
- **Crítica Cinematográfica**: Reseñas y análisis

### 3. Bio

- Información biográfica
- Botón de descarga de CV
- Experiencia y educación

### 4. Contact

- Información de contacto
- Formulario de contacto (opcional)
- Redes sociales

## Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## Control de Versiones

- Repositorio Git inicializado
- Conectar con GitHub remoto

## Notas de Desarrollo

- Mantener simplicidad con impacto visual
- Desarrollo paso a paso con verificación continua
- Primero completar Home, luego las demás secciones
- Código limpio y bien estructurado
- Comentarios en TypeScript para claridad

## Autor

Carla

## Fecha de Inicio

10 de noviembre de 2025
