# Guía de Deployment - Web Carla

## 🚀 Opciones de Hosting

### Opción 1: GitHub Pages (GRATIS) ⭐ Recomendado

Ya está configurado en `astro.config.mjs`:
```javascript
site: 'https://davidserranoreyes.github.io',
base: '/web-carla',
```

#### Pasos para Deploy:

1. **Crear workflow de GitHub Actions**
   - Ya existe el archivo `.github/workflows/deploy.yml` (si no, créalo)

2. **Verificar que el repositorio esté en GitHub:**
   ```bash
   git remote -v
   ```
   Debería mostrar: `origin  https://github.com/DavidSerranoReyes/web-carla.git`

3. **Habilitar GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - Source: GitHub Actions
   - Save

4. **Push al repositorio:**
   ```bash
   git add .
   git commit -m "Deploy web completa"
   git push origin main
   ```

5. **GitHub Actions hará el deploy automáticamente**
   - Ve a la pestaña "Actions" en GitHub
   - Verás el workflow ejecutándose
   - En 2-3 minutos estará listo

6. **Tu web estará en:**
   ```
   https://davidserranoreyes.github.io/web-carla/
   ```

#### Crear el archivo de GitHub Actions:

Si no existe, crea `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

### Opción 2: Vercel (GRATIS) 🚀

**Ventajas:**
- Deploy automático en cada push
- Preview de cada PR
- Dominio personalizado gratis
- CDN global súper rápido

#### Pasos:

1. **Ir a Vercel:** https://vercel.com
2. **Sign up con GitHub**
3. **Import Project:**
   - Seleccionar repositorio `web-carla`
4. **Configure Project:**
   - Framework Preset: Astro
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Deploy**
6. **Tu web estará en:** `https://web-carla.vercel.app`

---

### Opción 3: Netlify (GRATIS) 🌐

**Ventajas:**
- Muy fácil de usar
- Forms gratis
- Funciones serverless

#### Pasos:

1. **Ir a Netlify:** https://netlify.com
2. **Sign up con GitHub**
3. **New site from Git:**
   - Seleccionar repositorio
4. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
5. **Deploy**
6. **Tu web estará en:** `https://web-carla.netlify.app`

---

## 📝 Checklist Pre-Deployment

Antes de hacer deploy, verifica:

- [ ] ✅ Video de fondo funciona
- [ ] ✅ CVs están en `/public/`
- [ ] ✅ Todas las imágenes están en `/public/images/`
- [ ] ✅ Enlaces de redes sociales correctos
- [ ] ✅ Email del formulario configurado
- [ ] ✅ Meta tags y SEO completos
- [ ] ✅ Sin errores en console del navegador
- [ ] ✅ Probado en Chrome y Firefox
- [ ] ✅ Probado en móvil (responsive)
- [ ] ⏳ (Opcional) Imágenes optimizadas a WebP

---

## 🔧 Build Local

Para probar el build antes de hacer deploy:

```bash
# Build
npm run build

# Preview
npm run preview
```

Abre: http://localhost:4321/web-carla/

---

## 🌐 Dominio Personalizado (Opcional)

### Con GitHub Pages:

1. Compra dominio (ej: carla larrea.com en Namecheap, GoDaddy, etc.)
2. En tu proveedor de dominio:
   - A record: `185.199.108.153`
   - A record: `185.199.109.153`
   - A record: `185.199.110.153`
   - A record: `185.199.111.153`
   - CNAME: `www` → `davidserranoreyes.github.io`
3. En GitHub: Settings → Pages → Custom domain
4. Espera 24-48hrs para propagación DNS

### Con Vercel/Netlify:

1. En el dashboard del hosting
2. Settings → Domains
3. Add custom domain
4. Sigue las instrucciones de DNS

---

## 📊 Analytics (Opcional)

### Google Analytics:

1. Crea cuenta en https://analytics.google.com
2. Obtén tu ID de medición (G-XXXXXXXXXX)
3. Agrega en `<head>` de Layout.astro:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🐛 Troubleshooting

**El build falla:**
- Verifica que no hay errores con `npm run build`
- Revisa los logs en GitHub Actions/Vercel/Netlify

**404 en rutas:**
- Verifica que `base: '/web-carla'` esté configurado
- Usa `${import.meta.env.BASE_URL}` en rutas

**Video no carga:**
- Verifica que esté en `/public/videos/video.mp4`
- Usa la ruta correcta con BASE_URL

**Formulario no envía:**
- Verifica el email en ContactForm.tsx
- Primera vez requiere verificación en FormSubmit

---

## ✅ Próximos Pasos Después del Deploy

1. Verificar que todo funciona en producción
2. Compartir el enlace en redes sociales
3. Agregar contenido real (artículos, críticas)
4. (Opcional) Configurar dominio personalizado
5. (Opcional) Configurar Analytics

---

**Última actualización:** 17 de noviembre de 2025
