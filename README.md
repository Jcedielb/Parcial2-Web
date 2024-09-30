# Triathlon Tracking App - README

## Tecnologías utilizadas

- **React**: Biblioteca de JavaScript para construir la interfaz de usuario.
- **React Router**: Para la navegación y manejo de rutas entre las diferentes páginas (Login y Home).
- **React Bootstrap**: Para la creación de componentes estilizados como modales y botones.
- **i18next**: Para la internacionalización (i18n), proporcionando traducciones dinámicas entre los idiomas **inglés** y **español**.
- **CSS**: Para los estilos personalizados y el diseño de la interfaz.

## Pasos de desarrollo

### 1. Configuración del entorno
El proyecto fue iniciado utilizando **Create React App** para tener una estructura básica de React. Se integraron **React Router** para la navegación entre las páginas y **React Bootstrap** para la interfaz gráfica.

### 2. Pantalla de Login
- **Validación de correo y contraseña**: Se implementaron validaciones para el formato de correo electrónico y la longitud de la contraseña.
- **Redirección**: Al iniciar sesión correctamente, el usuario es redirigido a la pantalla de Home.

### 3. Pantalla Home
- **Mock de datos**: Se creó un servicio mock (`mockUserService.js`) para generar los datos del usuario y sus actividades (tiempos en ciclismo, running y natación).
- **Componente `ActivityCard`**: Componente reutilizable que muestra cada actividad, con datos como la duración, longitud y ciudad.
- **Modal para detalles**: Al hacer clic en una actividad, se abre un **Modal** que muestra detalles adicionales de la actividad.

### 4. Internacionalización (i18n)
- Se utilizó **i18next** para implementar la internacionalización de la aplicación, soportando tanto **español** como **inglés**.
- **LanguageSelector**: Componente que permite cambiar dinámicamente entre los idiomas.

### 5. Manejo de imágenes específicas
Para cada deporte (ciclismo, running, natación), se asignó una imagen específica utilizando URLs predefinidas.

### 6. Estilos personalizados
Se utilizó **CSS personalizado** en combinación con **React Bootstrap** para darle una apariencia moderna a la aplicación.

## Decisiones de desarrollo

- **Uso de React Bootstrap**: Elegí **React Bootstrap** por su facilidad para crear interfaces modernas y su compatibilidad con React. Componentes como los modales y botones se implementaron usando esta biblioteca.

- **Internacionalización con i18next**: Decidí usar **i18next** por ser una solución robusta y ampliamente utilizada para la internacionalización de aplicaciones React. Facilita el soporte de múltiples idiomas con un rendimiento eficiente.

- **Mock de datos**: Para simular datos de usuario y actividades, creé un servicio mock que genera actividades aleatorias para cada deporte. Esto permitió que la aplicación fuera funcional sin necesidad de una API real.

- **Imágenes específicas por deporte**: Se asignaron URLs específicas para las imágenes de cada deporte, permitiendo una experiencia visual consistente y personalizada.
