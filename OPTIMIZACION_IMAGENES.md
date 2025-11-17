# Guía de Optimización de Imágenes

## 🖼️ Estado Actual

Las imágenes actuales están en formato JPG. Para mejorar el rendimiento de la web, es recomendable:

1. **Convertir a WebP** (formato más moderno y ligero)
2. **Comprimir imágenes** (reducir tamaño sin perder mucha calidad)
3. **Usar lazy loading** (cargar imágenes solo cuando sean visibles)

## ✅ Componente OptimizedImage

Ya creé el componente `OptimizedImage.tsx` que incluye:

- ✅ Lazy loading automático
- ✅ Placeholder mientras carga
- ✅ Animación skeleton
- ✅ Intersection Observer para detectar visibilidad

### Cómo usar OptimizedImage:

```tsx
import OptimizedImage from '../components/OptimizedImage';

<OptimizedImage
  src="/images/bio/profile.jpg"
  alt="Carla Larrea"
  width={800}
  height={600}
  loading="lazy"
/>;
```

## 🛠️ Herramientas para Optimizar Imágenes

### Opción 1: Online (Gratis y Fácil)

**Squoosh** - https://squoosh.app/

- Arrastra tus imágenes
- Selecciona formato WebP
- Ajusta calidad (recomendado: 75-85%)
- Descarga imágenes optimizadas

**TinyPNG** - https://tinypng.com/

- Sube hasta 20 imágenes a la vez
- Comprime automáticamente
- Descarga las imágenes comprimidas

### Opción 2: Línea de Comandos (Avanzado)

Instalar herramientas:

```bash
# En Linux/Mac
sudo apt-get install webp imagemagick

# En Mac con Homebrew
brew install webp imagemagick
```

Script para convertir todas las imágenes a WebP:

```bash
# Navega a la carpeta de imágenes
cd public/images

# Convertir todas las JPG a WebP
find . -name "*.jpg" -exec sh -c 'cwebp -q 80 "$1" -o "${1%.jpg}.webp"' _ {} \;

# Convertir todas las PNG a WebP
find . -name "*.png" -exec sh -c 'cwebp -q 80 "$1" -o "${1%.png}.webp"' _ {} \;
```

## 📁 Estructura Recomendada

```
public/
  images/
    bio/
      profile.jpg        ← Original
      profile.webp       ← Optimizado
      gallery1.jpg
      gallery1.webp
    films/
      indeleble.jpg
      indeleble.webp
```

## 🔄 Plan de Acción

### Prioridad ALTA 🔴

Optimizar estas imágenes primero (son las más visibles):

1. **Home:**
   - Video de fondo ya optimizado ✅

2. **Bio:**
   - `/public/images/bio/profile.jpg` (foto principal)
   - `/public/images/bio/gallery1-8.jpg` (imágenes del scroll)

3. **Portfolio:**
   - `/public/images/films/indeleble.jpg` (poster principal)
   - `/public/images/films/indeleble1-3.jpg` (galería)

### Prioridad MEDIA 🟡

Optimizar cuando agregues contenido:

4. **Artículos (futuro):**
   - Thumbnails de artículos académicos

5. **Críticas (futuro):**
   - Pósters de películas para críticas

## 📊 Tamaños Recomendados

| Tipo de Imagen  | Ancho Máximo | Formato | Calidad |
| --------------- | ------------ | ------- | ------- |
| Hero/Banner     | 1920px       | WebP    | 80%     |
| Posters grandes | 1200px       | WebP    | 85%     |
| Galería         | 800px        | WebP    | 80%     |
| Thumbnails      | 400px        | WebP    | 75%     |
| Profile         | 800px        | WebP    | 85%     |

## 🚀 Beneficios

**Antes de optimizar:**

- JPG profile.jpg: ~2MB
- Total 9 imágenes bio: ~15MB

**Después de optimizar:**

- WebP profile.webp: ~400KB (80% menos)
- Total 9 imágenes bio: ~3MB (80% menos)

**Resultado:**

- ⚡ Carga 5x más rápida
- 📱 Mejor experiencia en móviles
- 🌐 Menor consumo de datos
- 🔍 Mejor SEO (Google premia sitios rápidos)

## 💡 Tips Adicionales

1. **Mantén los originales:** Guarda copias de las imágenes originales en alta calidad
2. **Nombres descriptivos:** `carla-larrea-profile.webp` mejor que `IMG_1234.webp`
3. **Alt text:** Siempre agrega descripción para accesibilidad y SEO
4. **Responsive:** Considera usar srcset para diferentes tamaños de pantalla

## 🔧 Próximos Pasos

1. ✅ Componente OptimizedImage creado
2. ⏳ Descargar Squoosh o instalar cwebp
3. ⏳ Convertir imágenes de bio/ a WebP
4. ⏳ Convertir imágenes de films/ a WebP
5. ⏳ (Opcional) Actualizar componentes para usar WebP

---

**Nota:** Por ahora las imágenes JPG funcionan bien. La optimización a WebP es para mejorar el rendimiento pero no es urgente para terminar el proyecto.

**Última actualización:** 17 de noviembre de 2025
