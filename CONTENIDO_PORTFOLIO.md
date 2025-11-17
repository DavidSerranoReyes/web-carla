# Contenido para Portfolio - Web Carla

## 📚 ARTÍCULOS ACADÉMICOS

Para agregar tus artículos académicos, copia la estructura de este ejemplo y reemplaza con tus datos reales:

### Ejemplo de Artículo 1:
```typescript
{
  title: "Título del artículo en español",
  titleEn: "Article title in English",
  journal: "Nombre de la revista o publicación",
  journalEn: "Journal name in English (opcional)",
  year: "2023",
  authors: ["Carla Larrea Sánchez", "Co-autor 1", "Co-autor 2"],
  abstract: "Resumen del artículo en español. Describe brevemente el contenido, metodología y principales hallazgos del trabajo académico.",
  abstractEn: "Article abstract in English. Briefly describe the content, methodology and main findings of the academic work.",
  keywords: ["palabra clave 1", "palabra clave 2", "palabra clave 3"],
  keywordsEn: ["keyword 1", "keyword 2", "keyword 3"],
  pdfUrl: "/articles/articulo1.pdf",
  externalUrl: "https://enlace-a-publicacion-online.com",
  thumbnail: "/images/portfolio/article1.jpg"
}
```

### Ejemplo de Artículo 2:
```typescript
{
  title: "Otro artículo académico",
  titleEn: "Another academic article",
  journal: "Otra revista académica",
  year: "2022",
  authors: ["Carla Larrea Sánchez"],
  abstract: "Resumen del segundo artículo...",
  abstractEn: "Abstract of second article...",
  keywords: ["derechos humanos", "cine", "feminismo"],
  keywordsEn: ["human rights", "cinema", "feminism"],
  pdfUrl: "/articles/articulo2.pdf",
  externalUrl: "https://publicacion2.com"
}
```

---

## 🎬 CRÍTICA CINEMATOGRÁFICA

Para agregar tus críticas de cine, usa esta estructura:

### Ejemplo de Crítica 1:
```typescript
{
  title: "Título de tu crítica",
  titleEn: "Title of your review",
  filmTitle: "Nombre de la película criticada",
  filmTitleEn: "Film title in English",
  publication: "Medio donde se publicó",
  publicationEn: "Publication name in English",
  date: "15 de marzo, 2024",
  excerpt: "Extracto o primer párrafo de la crítica cinematográfica. Debe ser atractivo y dar una idea del análisis.",
  excerptEn: "Excerpt or first paragraph of the film review. Should be engaging and give an idea of the analysis.",
  url: "https://enlace-a-la-critica-completa.com",
  thumbnail: "/images/portfolio/film-poster1.jpg"
}
```

### Ejemplo de Crítica 2:
```typescript
{
  title: "Otra crítica de cine",
  titleEn: "Another film review",
  filmTitle: "Otra película",
  publication: "Revista de cine",
  date: "10 de enero, 2024",
  excerpt: "Primer párrafo de otra crítica...",
  excerptEn: "First paragraph of another review...",
  url: "https://critica2.com",
  thumbnail: "/images/portfolio/film-poster2.jpg"
}
```

---

## 📁 ARCHIVOS NECESARIOS

1. **PDFs de artículos**: Guárdalos en `/public/articles/`
2. **Imágenes de thumbnails**: Guárdalas en `/public/images/portfolio/`
3. **Pósters de películas**: Para las críticas, en `/public/images/portfolio/`

---

## ✅ PRÓXIMOS PASOS

1. Recopila tus artículos académicos publicados
2. Recopila tus críticas cinematográficas
3. Prepara los PDFs y subirlos a `/public/articles/`
4. Prepara imágenes thumbnail (opcional pero recomendado)
5. Dame la información para que actualice el código

---

## 💡 NOTAS

- Los campos con "En" son para la versión en inglés
- Si no tienes thumbnail, el componente funciona sin él
- Los enlaces externos (externalUrl, url) deben ser URLs completas
- Las palabras clave ayudan al SEO y contexto del artículo
