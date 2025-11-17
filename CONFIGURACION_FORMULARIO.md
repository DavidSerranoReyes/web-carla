# Configuración del Formulario de Contacto

## 📧 Email de Destino

El formulario de contacto usa **FormSubmit.co**, un servicio gratuito que no requiere backend.

### Configuración Actual

El email configurado en `/src/components/ContactForm.tsx` es:
```
carla.larreas@gmail.com
```

### Cómo Cambiar el Email

1. Abre `/src/components/ContactForm.tsx`
2. Busca la línea con `formsubmit.co/ajax/`
3. Reemplaza el email con el tuyo:

```typescript
const response = await fetch('https://formsubmit.co/ajax/TU-EMAIL-AQUI@example.com', {
```

### Primera Vez - Verificación de Email

**IMPORTANTE:** La primera vez que alguien envíe un mensaje:

1. FormSubmit.co enviará un email de verificación a tu correo
2. Debes hacer clic en el enlace de verificación
3. Después de eso, todos los mensajes llegarán directamente a tu bandeja de entrada

### Características Actuales

✅ **Validación de formulario**
✅ **Feedback visual (éxito/error)**
✅ **Estado de carga mientras se envía**
✅ **Bilingüe (ES/EN)**
✅ **Diseño responsive**
✅ **Sin necesidad de backend**

### Opciones Avanzadas de FormSubmit

Puedes agregar más opciones en el body del fetch:

```typescript
body: JSON.stringify({
  name: formData.name,
  email: formData.email,
  message: formData.message,
  _subject: 'Nuevo mensaje desde tu web',
  _captcha: 'false',  // Cambiar a 'true' para activar captcha
  _template: 'table', // Formato del email: 'table', 'box', 'basic'
  _autoresponse: 'Gracias por tu mensaje. Te responderé pronto.', // Email automático al remitente
}),
```

### Alternativas a FormSubmit

Si prefieres otro servicio, estas son buenas opciones:

1. **EmailJS** - https://www.emailjs.com/
   - Gratis hasta 200 emails/mes
   - Más personalizable

2. **Getform** - https://getform.io/
   - Interfaz simple
   - 50 envíos/mes gratis

3. **Formspree** - https://formspree.io/
   - Popular y confiable
   - 50 envíos/mes gratis

## 🔒 Seguridad

- El formulario usa `_captcha: 'false'` para facilitar testing
- **IMPORTANTE:** Cambia a `'true'` en producción para evitar spam
- FormSubmit.co incluye protección anti-spam integrada

## 📱 Testing

Para probar el formulario:

1. Completa todos los campos
2. Haz clic en "Enviar mensaje"
3. Verás el mensaje "Enviando..."
4. Si es exitoso: mensaje verde de confirmación
5. Si hay error: mensaje rojo de error

## ❓ Solución de Problemas

**El formulario no envía:**
- Verifica que el email en el código sea correcto
- Verifica tu conexión a internet
- Revisa la consola del navegador para errores

**No recibo los emails:**
- Verifica tu bandeja de spam
- Asegúrate de haber verificado el email con FormSubmit (primera vez)
- Revisa que el email en el código esté bien escrito

**Error CORS:**
- FormSubmit.co debe funcionar sin problemas
- Si usas otro servicio, verifica su documentación de CORS

## 📚 Documentación

- FormSubmit: https://formsubmit.co/
- Repositorio de ejemplo: https://github.com/formspr ee/formspree-example

---

**Última actualización:** 17 de noviembre de 2025
