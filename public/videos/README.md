# Videos para el fondo del Home

Coloca aquí tu video de fondo con el nombre `background.mp4`.

## Recomendaciones

- Formato: MP4 (H.264)
- Resolución: 1920x1080 o superior
- Duración: 30-60 segundos (se reproduce en loop)
- Tamaño: Optimizado para web (< 10MB)
- Sin audio (se reproduce muted)

## Herramientas para optimizar videos

```bash
# Con ffmpeg
ffmpeg -i input.mp4 -vcodec h264 -acodec none -crf 28 background.mp4
```

## Alternativa

Si no tienes un video, puedes usar un video placeholder o cambiar el componente `VideoBackground.tsx` para usar una imagen de fondo en su lugar.
