# Proyecto React - Aplicación de Eventos

## Descripción
Este proyecto es una aplicación desarrollada en **React 18** con **Vite**, diseñada para la gestión y visualización de eventos. La aplicación sigue un diseño inspirado en Reddit y está estructurada de forma modular para facilitar la escalabilidad.

## Estructura del Proyecto

```
/src
│── assets/         # Recursos estáticos (imágenes, fuentes, íconos, etc.)
│── components/     # Componentes reutilizables (Navbar, Aside, etc.)
│── css/           # Archivos de estilos CSS
│── data/          # Datos estáticos o archivos JSON simulando API
│── layout/        # Diseño de la estructura de la aplicación (plantillas, secciones principales)
│── pages/         # Páginas principales de la aplicación (Inicio, Eventos, Perfil, etc.)
│── providers/     # Context API para la gestión de estado global
│── App.jsx        # Componente principal de la aplicación
│── index.css      # Estilos globales
│── main.jsx       # Punto de entrada de la aplicación
│── index.html     # Archivo HTML base
│── vite.config.js # Configuración de Vite
```

## Tecnologías Utilizadas
- **React 18** con **Vite** para un desarrollo rápido y eficiente.
- **React Router** para la navegación entre páginas.
- **Context API** para la gestión global de estados (manejo de personajes y facciones).
- **Tailwind CSS** para la estilización.
- **Laravel 11** para la lógica del backend (login, registro y administración de usuarios).

## Características
- **Navbar fijo** con enlaces a las secciones principales.
- **Aside izquierdo** fijo en pantallas grandes y desplegable en pantallas pequeñas.
- **Autenticación con Laravel**: Login y registro se gestionan en Laravel y la sesión se sincroniza con React.
- **Sistema de eventos** donde los usuarios pueden ver y gestionar publicaciones.
- **Soporte para temas visuales** y personalización de la interfaz.

## Instalación y Configuración
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Sr-Stroncio/LocalEvents-Front
   cd proyecto-eventos
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Contribución
Si deseas contribuir, por favor abre un **issue** o un **pull request** en el repositorio.

## Licencia
Este proyecto está bajo la licencia MIT.

