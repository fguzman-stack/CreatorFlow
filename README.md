# CreatorFlow — Modern Template for Digital Creators

---

## 📑 Table of Contents / Índice

### English Version
- [Overview](#english-overview)
- [Features](#english-features)
- [Technologies](#english-technologies)
- [Prerequisites](#english-prerequisites)
- [Installation](#english-installation)
- [Getting Started](#english-getting-started)
- [Project Structure](#english-project-structure)
- [Configuration](#english-configuration)
- [Pages & Components](#english-pages--components)
- [Internationalization (i18n)](#english-internationalization-i18n)
- [Theming & Dark Mode](#english-theming--dark-mode)
- [Routing](#english-routing)
- [Customization Guide](#english-customization-guide)
- [Deployment](#english-deployment)
- [Troubleshooting](#english-troubleshooting)
- [FAQ](#english-faq)
- [Contributing](#english-contributing)
- [License](#english-license)

### Versión en Español
- [Visión General](#español-visión-general)
- [Características](#español-características)
- [Tecnologías](#español-tecnologías)
- [Requisitos Previos](#español-requisitos-previos)
- [Instalación](#español-instalación)
- [Inicio Rápido](#español-inicio-rápido)
- [Estructura del Proyecto](#español-estructura-del-proyecto)
- [Configuración](#español-configuración)
- [Páginas y Componentes](#español-páginas-y-componentes)
- [Internacionalización (i18n)](#español-internacionalización-i18n)
- [Temas y Modo Oscuro](#español-temas-y-modo-oscuro)
- [Enrutamiento](#español-enrutamiento)
- [Guía de Personalización](#español-guía-de-personalización)
- [Despliegue](#español-despliegue)
- [Solución de Problemas](#español-solución-de-problemas)
- [Preguntas Frecuentes](#español-preguntas-frecuentes)
- [Contribuir](#español-contribuir)
- [Licencia](#español-licencia)

---

# English Version

## Overview {#english-overview}

**CreatorFlow** is a professional, modern, and conversion-focused React + TypeScript template designed specifically for digital creators, course creators, bloggers, and online entrepreneurs. Built with Vite for lightning-fast development and optimized with Tailwind CSS for beautiful, responsive designs, CreatorFlow provides everything you need to launch a professional digital presence quickly.

### Key Highlights
- 🚀 **Fast Development**: Powered by Vite for instant hot module replacement
- 🎨 **Modern Design**: Beautiful, responsive UI with dark mode support
- 🌍 **Multi-language**: Built-in i18n support for English and Spanish (easily extensible)
- 📱 **Fully Responsive**: Optimized for all devices from mobile to desktop
- 🔧 **TypeScript**: Full type safety and better developer experience
- 🎯 **Conversion-Focused**: Pre-built landing pages, sales pages, and course pages designed to convert
- ⚡ **Performance**: Optimized builds with code splitting and lazy loading
- 🧩 **Component-Based**: Reusable, well-structured components for rapid development

## Features {#english-features}

### Core Features
- ✅ **Dark Mode**: Automatic theme switching with system preference detection and manual toggle
- ✅ **Internationalization**: English and Spanish support with easy language switching
- ✅ **Multiple Page Types**: Landing page, Sales page, Course landing page, Blog with dynamic posts
- ✅ **Authentication Pages**: Login and Register pages (ready for backend integration)
- ✅ **Modern Animations**: Smooth transitions and animations using Tailwind CSS
- ✅ **SEO Ready**: Meta tags and semantic HTML structure
- ✅ **Component Library**: Pre-built UI components (buttons, cards, inputs, modals, galleries, sliders, tables, toasts)
- ✅ **Responsive Navigation**: Mobile-friendly navigation with hamburger menu
- ✅ **Testimonials & Social Proof**: Sections for showcasing testimonials and reviews
- ✅ **Newsletter Integration**: Ready-to-connect newsletter signup forms

### Technical Features
- TypeScript for type safety
- React Router for client-side routing
- Tailwind CSS for styling with custom configuration
- i18next for internationalization
- Lucide React for icon system
- PostCSS for CSS processing
- Vite for build tooling

## Technologies {#english-technologies}

### Core Stack
- **React 18.2.0**: Modern React with hooks and concurrent features
- **TypeScript 5.0.0**: Type-safe JavaScript
- **Vite 4.0.0**: Next-generation frontend tooling
- **React Router DOM 6.22.3**: Client-side routing
- **Tailwind CSS 3.3.0**: Utility-first CSS framework
- **i18next 25.3.2**: Internationalization framework
- **react-i18next 15.6.0**: React bindings for i18next
- **Lucide React 0.292.0**: Beautiful icon library

### Development Tools
- **@vitejs/plugin-react**: Vite plugin for React
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing
- **tailwindcss-animate**: Animation utilities for Tailwind

## Prerequisites {#english-prerequisites}

Before you begin, ensure you have the following installed:
- **Node.js**: Version 16.x or higher (18.x recommended)
- **npm**: Version 8.x or higher (comes with Node.js)
- **Git**: For version control (optional but recommended)

To verify your installation:
```bash
node --version  # Should be v16.x or higher
npm --version   # Should be 8.x or higher
```

## Installation {#english-installation}

### Step 1: Clone or Download
```bash
# If using Git
git clone <repository-url>
cd CreatorFlow

# Or download and extract the ZIP file, then navigate to the folder
cd CreatorFlow
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install all required dependencies listed in `package.json`. The installation may take a few minutes depending on your internet connection.

### Step 3: Verify Installation
After installation completes, you should see a `node_modules` folder in your project directory. If you encounter any errors, see the [Troubleshooting](#english-troubleshooting) section.

## Getting Started {#english-getting-started}

### Development Server

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is occupied). Vite will automatically open your default browser.

### Available Scripts

- **`npm run dev`**: Start the development server with hot module replacement
- **`npm run build`**: Build the application for production (outputs to `dist/`)
- **`npm run preview`**: Preview the production build locally

### First Steps

1. **Customize Branding**: Edit `src/config.ts` to set your brand name, colors, and social links
2. **Update Content**: Modify language files in `src/i18n/` for your content
3. **Replace Images**: Update image URLs in `src/config.ts` or add images to `public/`
4. **Configure Routes**: Add new pages in `src/pages/` and routes in `src/App.tsx`

## Project Structure {#english-project-structure}

```
CreatorFlow/
├── public/                    # Static assets
│   └── favicon.ico           # Website favicon
├── src/                       # Source code
│   ├── components/           # React components
│   │   ├── common/          # Shared/common components
│   │   │   ├── Gallery.tsx  # Image gallery component
│   │   │   ├── LanguageSwitcher.tsx  # Language toggle
│   │   │   ├── Modal.tsx    # Modal dialog component
│   │   │   ├── Slider.tsx   # Carousel/slider component
│   │   │   ├── Table.tsx    # Data table component
│   │   │   └── Toast.tsx    # Notification toast component
│   │   ├── ui/              # Atomic UI components
│   │   │   ├── button.tsx   # Button component
│   │   │   ├── card.tsx     # Card component
│   │   │   ├── input.tsx    # Input field component
│   │   │   └── section.tsx  # Section wrapper component
│   │   ├── Footer.tsx       # Site footer
│   │   └── Navigation.tsx   # Main navigation bar
│   ├── data/                # Static data files
│   │   ├── galleryImages.ts # Gallery image data
│   │   ├── posts.ts         # Blog post data
│   │   ├── products.ts      # Product data
│   │   └── users.ts         # User data (examples)
│   ├── i18n/                # Internationalization
│   │   ├── en.json          # English translations
│   │   ├── es.json          # Spanish translations
│   │   └── index.ts         # i18n configuration
│   ├── lib/                 # Utility functions
│   │   └── utils.ts         # Helper utilities
│   ├── pages/               # Page components
│   │   ├── auth/           # Authentication pages
│   │   │   ├── Login.tsx   # Login page
│   │   │   └── Register.tsx # Registration page
│   │   ├── Blog.tsx        # Blog listing page
│   │   ├── BlogPost.tsx    # Individual blog post page
│   │   ├── CourseLanding.tsx # Course landing page
│   │   ├── Index.tsx       # Home/landing page
│   │   └── SalesPage.tsx   # Sales/offer page
│   ├── theme/              # Theme configuration (if present)
│   ├── App.tsx             # Main app component with routes
│   ├── config.ts           # Site configuration (branding, colors, etc.)
│   ├── index.css           # Global styles and CSS variables
│   └── main.tsx            # Application entry point
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── package-lock.json        # Dependency lock file
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── README.md                # This file
```

## Configuration {#english-configuration}

### Site Configuration (`src/config.ts`)

The `config.ts` file is the central place to customize your site's branding, colors, content, and images.

```typescript
export const siteConfig = {
  brand: {
    name: "",           // Your brand name
    logo: "",           // Logo URL or path
    primaryColor: "#6366f1",    // Primary brand color
    secondaryColor: "#06b6d4",  // Secondary brand color
  },
  creator: {
    name: "",           // Creator name
    bio: "...",         // Creator bio
    avatar: "",         // Avatar image URL
    social: {
      youtube: "#",     // YouTube URL
      patreon: "#",     // Patreon URL
      twitter: "#",     // Twitter URL
    },
  },
  cta: {
    main: "...",        // Main CTA text
    sales: "...",       // Sales page CTA
    course: "...",      // Course page CTA
    newsletter: "...",  // Newsletter CTA
  },
  images: {
    hero: "...",        // Hero section image
    product: "...",     // Product image
    testimonial1: "...", // Testimonial avatar 1
    testimonial2: "...", // Testimonial avatar 2
  },
  testimonials: [...],  // Testimonial data
  faq: [...],           // FAQ data
};
```

### Tailwind Configuration (`tailwind.config.ts`)

The Tailwind config includes:
- Custom color system with CSS variables
- Dark mode support (class-based)
- Custom border radius values
- Animation keyframes
- Extended theme configuration

### Vite Configuration (`vite.config.ts`)

Vite is configured with:
- React plugin
- Path aliases (`@/` maps to `src/`)
- Optimized build settings

### TypeScript Configuration (`tsconfig.json`)

TypeScript is configured with:
- Strict mode enabled
- Path mapping for clean imports
- React JSX support
- ESNext module system

## Pages & Components {#english-pages--components}

### Available Pages

1. **Index (Home Page)** - `/`
   - Hero section with CTA
   - Benefits/features section
   - Testimonials
   - FAQ section
   - Newsletter signup

2. **Sales Page** - `/sales`
   - Problem/solution presentation
   - Product features and modules
   - Pricing packages
   - Bonuses section
   - Guarantee information
   - FAQ section
   - Final CTA with urgency

3. **Course Landing** - `/course`
   - Course hero with stats
   - What you'll learn section
   - Full curriculum with modules
   - Instructor information
   - Exclusive bonuses
   - Call-to-action buttons

4. **Blog** - `/blog`
   - Blog listing with categories
   - Featured articles
   - Latest articles
   - Search functionality
   - Newsletter signup
   - Category filtering

5. **Blog Post** - `/blog/:id`
   - Full blog post content
   - Author information
   - Related articles
   - Share/save buttons
   - Newsletter signup
   - Comments section (ready for integration)

6. **Login** - `/login` (route not active by default)
   - Email/password login form
   - Ready for backend integration

7. **Register** - `/register` (route not active by default)
   - Registration form
   - Ready for backend integration

### Available Components

#### Common Components (`src/components/common/`)
- **Gallery**: Image gallery with lightbox functionality
- **LanguageSwitcher**: Language toggle dropdown
- **Modal**: Reusable modal dialog
- **Slider**: Carousel/slider for images or content
- **Table**: Data table component
- **Toast**: Notification toast messages

#### UI Components (`src/components/ui/`)
- **Button**: Styled button component with variants
- **Card**: Card container component
- **Input**: Form input component
- **Section**: Section wrapper with consistent spacing

#### Layout Components
- **Navigation**: Main navigation bar with mobile menu
- **Footer**: Site footer with social links

## Internationalization (i18n) {#english-internationalization-i18n}

CreatorFlow uses i18next for internationalization with support for English and Spanish.

### Language Files
- `src/i18n/en.json` - English translations
- `src/i18n/es.json` - Spanish translations

### How It Works
1. Language is detected from browser settings or localStorage
2. Default language is English
3. Users can switch languages using the LanguageSwitcher component
4. Selected language is saved in localStorage

### Adding Translations

To add a new translation:
1. Add the key to both `en.json` and `es.json`
2. Use the `useTranslation` hook in your component:
```typescript
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  return <h1>{t('myKey')}</h1>;
};
```

### Adding a New Language
1. Create a new JSON file in `src/i18n/` (e.g., `fr.json`)
2. Add it to the resources in `src/i18n/index.ts`:
```typescript
import fr from "./fr.json";
const resources = {
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr }, // Add new language
};
```

## Theming & Dark Mode {#english-theming--dark-mode}

### Dark Mode Implementation

Dark mode is implemented using:
- CSS variables for theme colors
- `class` strategy (adds/removes `dark` class on `<html>`)
- localStorage persistence
- System preference detection

### How It Works

1. **Theme Detection**: On load, the app checks:
   - localStorage for saved preference
   - System preference if no saved preference
   
2. **Theme Toggle**: Users can toggle dark mode using the sun/moon icon in the navigation

3. **CSS Variables**: Colors are defined as CSS variables that change based on the theme:
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
}
```

### Customizing Colors

Edit `src/index.css` to customize the color scheme. The color system uses HSL values for easier manipulation.

## Routing {#english-routing}

Routing is handled by React Router DOM. Routes are defined in `src/App.tsx`:

```typescript
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/sales" element={<SalesPage />} />
  <Route path="/course" element={<CourseLanding />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/blog/:id" element={<BlogPost />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

### Adding New Routes

1. Create a new page component in `src/pages/`
2. Import it in `src/App.tsx`
3. Add a new `<Route>` element
4. Optionally, add a link in the Navigation component

## Customization Guide {#english-customization-guide}

### Changing Branding
1. Edit `src/config.ts`:
   - Update `brand.name` and `brand.logo`
   - Change `brand.primaryColor` and `brand.secondaryColor`

### Updating Content
1. **Text Content**: Edit language files in `src/i18n/`
2. **Images**: Update URLs in `src/config.ts` or add files to `public/`
3. **Testimonials**: Edit `testimonials` array in `src/config.ts`
4. **FAQ**: Edit `faq` array in `src/config.ts`

### Customizing Styles
1. **Global Styles**: Edit `src/index.css`
2. **Tailwind Config**: Modify `tailwind.config.ts` for theme customization
3. **Component Styles**: Use Tailwind classes directly in components

### Adding New Pages
1. Create component in `src/pages/YourPage.tsx`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/Navigation.tsx`
4. Add translations in language files

### Integrating Forms
Forms are currently UI-only. To add functionality:
1. Install a form library (React Hook Form is included)
2. Add backend endpoint URLs
3. Handle form submission
4. Add error handling and validation

## Deployment {#english-deployment}

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Deployment Platforms

#### Vercel
1. Push your code to GitHub
2. Import project in Vercel
3. Vercel auto-detects Vite configuration
4. Deploy (build command: `npm run build`, output: `dist`)

#### Netlify
1. Push your code to GitHub
2. Add new site in Netlify
3. Connect repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy

#### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Update `vite.config.ts` with base path
4. Run `npm run deploy`

### Environment Variables

For sensitive data (API keys, etc.), create a `.env` file:
```
VITE_API_KEY=your_key_here
```

Access in code: `import.meta.env.VITE_API_KEY`

## Troubleshooting {#english-troubleshooting}

### Common Issues

**Port already in use**
```bash
# Kill process on port 5173 (macOS/Linux)
lsof -ti:5173 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

**Module not found errors**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors**
- Ensure all files have proper TypeScript types
- Check `tsconfig.json` configuration
- Restart TypeScript server in your IDE

**Build fails**
- Check Node.js version (should be 16+)
- Clear build cache: `rm -rf dist`
- Check for syntax errors in code

**Dark mode not working**
- Ensure `dark` class is added to `<html>` element
- Check CSS variables in `src/index.css`
- Verify Tailwind config has `darkMode: 'class'`

**i18n not working**
- Check language files are valid JSON
- Verify i18n initialization in `src/i18n/index.ts`
- Check browser console for errors

## FAQ {#english-faq}

**Q: Do I need to know how to code to use this template?**
A: Basic knowledge of React, TypeScript, and file editing is recommended. The template is well-documented and structured for easy customization.

**Q: Can I use this for multiple projects?**
A: Yes, as long as you respect the MIT license terms.

**Q: How do I change the favicon?**
A: Replace `public/favicon.ico` with your own icon file.

**Q: How do I add analytics?**
A: Add your analytics script (Google Analytics, etc.) in `index.html` within the `<head>` section.

**Q: How do I update dependencies?**
A: Run `npm update` to update to the latest compatible versions, or edit `package.json` and run `npm install`.

**Q: How do I add a real form with backend integration?**
A: You can integrate with services like Formspree, Getform, or your own backend API. Update the form submission handlers in the relevant components.

**Q: How do I change text and translate it later?**
A: All visible text is managed in language files (`src/i18n/en.json` and `src/i18n/es.json`). Edit the values in the corresponding file, and add the same key to the other language file for translation.

**Q: Can I add more languages?**
A: Yes! Create a new JSON file in `src/i18n/` and add it to the resources in `src/i18n/index.ts`.

**Q: How do I customize colors beyond the config file?**
A: Edit CSS variables in `src/index.css` for global colors, or modify `tailwind.config.ts` for Tailwind-specific customization.

**Q: Is this template SEO-friendly?**
A: Yes, the template includes semantic HTML and meta tags. For better SEO, ensure you customize meta tags in `index.html` and add structured data if needed.

**Q: Can I remove pages I don't need?**
A: Yes, simply remove the route from `src/App.tsx` and delete the corresponding page file. Also update the navigation component.

## Contributing {#english-contributing}

Contributions are welcome! If you'd like to contribute:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

Please ensure your code follows the existing style and includes appropriate documentation.

## License {#english-license}

MIT License - Free for personal and commercial use.

---

# Versión en Español

## Visión General {#español-visión-general}

**CreatorFlow** es una plantilla profesional, moderna y enfocada en conversión construida con React + TypeScript, diseñada específicamente para creadores digitales, creadores de cursos, blogueros y emprendedores online. Construida con Vite para un desarrollo ultrarrápido y optimizada con Tailwind CSS para diseños hermosos y responsivos, CreatorFlow proporciona todo lo necesario para lanzar una presencia digital profesional rápidamente.

### Aspectos Destacados
- 🚀 **Desarrollo Rápido**: Potenciado por Vite para reemplazo instantáneo de módulos en caliente
- 🎨 **Diseño Moderno**: Interfaz hermosa y responsiva con soporte para modo oscuro
- 🌍 **Multi-idioma**: Soporte i18n integrado para inglés y español (fácilmente extensible)
- 📱 **Totalmente Responsivo**: Optimizado para todos los dispositivos desde móvil hasta escritorio
- 🔧 **TypeScript**: Seguridad de tipos completa y mejor experiencia de desarrollo
- 🎯 **Enfocado en Conversión**: Páginas de destino, páginas de ventas y páginas de cursos preconstruidas diseñadas para convertir
- ⚡ **Rendimiento**: Construcciones optimizadas con code splitting y carga diferida
- 🧩 **Basado en Componentes**: Componentes reutilizables y bien estructurados para desarrollo rápido

## Características {#español-características}

### Características Principales
- ✅ **Modo Oscuro**: Cambio automático de tema con detección de preferencias del sistema y alternancia manual
- ✅ **Internacionalización**: Soporte para inglés y español con cambio de idioma fácil
- ✅ **Múltiples Tipos de Página**: Página de inicio, página de ventas, página de curso, blog con publicaciones dinámicas
- ✅ **Páginas de Autenticación**: Páginas de inicio de sesión y registro (listas para integración con backend)
- ✅ **Animaciones Modernas**: Transiciones y animaciones suaves usando Tailwind CSS
- ✅ **Listo para SEO**: Etiquetas meta y estructura HTML semántica
- ✅ **Biblioteca de Componentes**: Componentes UI preconstruidos (botones, tarjetas, entradas, modales, galerías, deslizadores, tablas, notificaciones)
- ✅ **Navegación Responsiva**: Navegación amigable para móviles con menú hamburguesa
- ✅ **Testimonios y Prueba Social**: Secciones para mostrar testimonios y reseñas
- ✅ **Integración de Newsletter**: Formularios de suscripción listos para conectar

### Características Técnicas
- TypeScript para seguridad de tipos
- React Router para enrutamiento del lado del cliente
- Tailwind CSS para estilos con configuración personalizada
- i18next para internacionalización
- Lucide React para sistema de iconos
- PostCSS para procesamiento CSS
- Vite para herramientas de construcción

## Tecnologías {#español-tecnologías}

### Stack Principal
- **React 18.2.0**: React moderno con hooks y características concurrentes
- **TypeScript 5.0.0**: JavaScript con tipos seguros
- **Vite 4.0.0**: Herramientas frontend de próxima generación
- **React Router DOM 6.22.3**: Enrutamiento del lado del cliente
- **Tailwind CSS 3.3.0**: Framework CSS utility-first
- **i18next 25.3.2**: Framework de internacionalización
- **react-i18next 15.6.0**: Bindings de React para i18next
- **Lucide React 0.292.0**: Biblioteca de iconos hermosa

### Herramientas de Desarrollo
- **@vitejs/plugin-react**: Plugin de Vite para React
- **PostCSS**: Procesamiento CSS
- **Autoprefixer**: Prefijos de proveedores CSS
- **tailwindcss-animate**: Utilidades de animación para Tailwind

## Requisitos Previos {#español-requisitos-previos}

Antes de comenzar, asegúrate de tener lo siguiente instalado:
- **Node.js**: Versión 16.x o superior (18.x recomendado)
- **npm**: Versión 8.x o superior (viene con Node.js)
- **Git**: Para control de versiones (opcional pero recomendado)

Para verificar tu instalación:
```bash
node --version  # Debe ser v16.x o superior
npm --version   # Debe ser 8.x o superior
```

## Instalación {#español-instalación}

### Paso 1: Clonar o Descargar
```bash
# Si usas Git
git clone <url-del-repositorio>
cd CreatorFlow

# O descarga y extrae el archivo ZIP, luego navega a la carpeta
cd CreatorFlow
```

### Paso 2: Instalar Dependencias
```bash
npm install
```

Esto instalará todas las dependencias requeridas listadas en `package.json`. La instalación puede tomar unos minutos dependiendo de tu conexión a internet.

### Paso 3: Verificar Instalación
Después de que la instalación se complete, deberías ver una carpeta `node_modules` en tu directorio del proyecto. Si encuentras algún error, consulta la sección [Solución de Problemas](#español-solución-de-problemas).

## Inicio Rápido {#español-inicio-rápido}

### Servidor de Desarrollo

Inicia el servidor de desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` (u otro puerto si el 5173 está ocupado). Vite abrirá automáticamente tu navegador predeterminado.

### Scripts Disponibles

- **`npm run dev`**: Inicia el servidor de desarrollo con reemplazo de módulos en caliente
- **`npm run build`**: Construye la aplicación para producción (salida en `dist/`)
- **`npm run preview`**: Previsualiza la construcción de producción localmente

### Primeros Pasos

1. **Personalizar Branding**: Edita `src/config.ts` para establecer el nombre de tu marca, colores y enlaces sociales
2. **Actualizar Contenido**: Modifica los archivos de idioma en `src/i18n/` para tu contenido
3. **Reemplazar Imágenes**: Actualiza las URLs de imágenes en `src/config.ts` o agrega imágenes a `public/`
4. **Configurar Rutas**: Agrega nuevas páginas en `src/pages/` y rutas en `src/App.tsx`

## Estructura del Proyecto {#español-estructura-del-proyecto}

```
CreatorFlow/
├── public/                    # Recursos estáticos
│   └── favicon.ico           # Favicon del sitio web
├── src/                       # Código fuente
│   ├── components/           # Componentes React
│   │   ├── common/          # Componentes compartidos/comunes
│   │   │   ├── Gallery.tsx  # Componente de galería de imágenes
│   │   │   ├── LanguageSwitcher.tsx  # Alternador de idioma
│   │   │   ├── Modal.tsx    # Componente de diálogo modal
│   │   │   ├── Slider.tsx   # Componente de carrusel/deslizador
│   │   │   ├── Table.tsx    # Componente de tabla de datos
│   │   │   └── Toast.tsx    # Componente de notificación toast
│   │   ├── ui/              # Componentes UI atómicos
│   │   │   ├── button.tsx   # Componente de botón
│   │   │   ├── card.tsx     # Componente de tarjeta
│   │   │   ├── input.tsx    # Componente de campo de entrada
│   │   │   └── section.tsx  # Componente contenedor de sección
│   │   ├── Footer.tsx       # Pie de página del sitio
│   │   └── Navigation.tsx   # Barra de navegación principal
│   ├── data/                # Archivos de datos estáticos
│   │   ├── galleryImages.ts # Datos de imágenes de galería
│   │   ├── posts.ts         # Datos de publicaciones del blog
│   │   ├── products.ts      # Datos de productos
│   │   └── users.ts         # Datos de usuarios (ejemplos)
│   ├── i18n/                # Internacionalización
│   │   ├── en.json          # Traducciones en inglés
│   │   ├── es.json          # Traducciones en español
│   │   └── index.ts         # Configuración i18n
│   ├── lib/                 # Funciones utilitarias
│   │   └── utils.ts         # Utilidades auxiliares
│   ├── pages/               # Componentes de página
│   │   ├── auth/           # Páginas de autenticación
│   │   │   ├── Login.tsx   # Página de inicio de sesión
│   │   │   └── Register.tsx # Página de registro
│   │   ├── Blog.tsx        # Página de listado de blog
│   │   ├── BlogPost.tsx    # Página de publicación individual del blog
│   │   ├── CourseLanding.tsx # Página de destino del curso
│   │   ├── Index.tsx       # Página de inicio/destino
│   │   └── SalesPage.tsx   # Página de ventas/oferta
│   ├── theme/              # Configuración de tema (si existe)
│   ├── App.tsx             # Componente principal de la app con rutas
│   ├── config.ts           # Configuración del sitio (branding, colores, etc.)
│   ├── index.css           # Estilos globales y variables CSS
│   └── main.tsx            # Punto de entrada de la aplicación
├── index.html               # Plantilla HTML
├── package.json             # Dependencias y scripts
├── package-lock.json        # Archivo de bloqueo de dependencias
├── postcss.config.js        # Configuración de PostCSS
├── tailwind.config.ts       # Configuración de Tailwind CSS
├── tsconfig.json            # Configuración de TypeScript
├── vite.config.ts           # Configuración de Vite
└── README.md                # Este archivo
```

## Configuración {#español-configuración}

### Configuración del Sitio (`src/config.ts`)

El archivo `config.ts` es el lugar central para personalizar el branding, colores, contenido e imágenes de tu sitio.

```typescript
export const siteConfig = {
  brand: {
    name: "",           // Nombre de tu marca
    logo: "",           // URL o ruta del logo
    primaryColor: "#6366f1",    // Color principal de la marca
    secondaryColor: "#06b6d4",  // Color secundario de la marca
  },
  creator: {
    name: "",           // Nombre del creador
    bio: "...",         // Biografía del creador
    avatar: "",         // URL de la imagen del avatar
    social: {
      youtube: "#",     // URL de YouTube
      patreon: "#",     // URL de Patreon
      twitter: "#",     // URL de Twitter
    },
  },
  cta: {
    main: "...",        // Texto del CTA principal
    sales: "...",       // CTA de la página de ventas
    course: "...",      // CTA de la página de curso
    newsletter: "...",  // CTA del newsletter
  },
  images: {
    hero: "...",        // Imagen de la sección hero
    product: "...",     // Imagen del producto
    testimonial1: "...", // Avatar de testimonial 1
    testimonial2: "...", // Avatar de testimonial 2
  },
  testimonials: [...],  // Datos de testimonios
  faq: [...],           // Datos de FAQ
};
```

### Configuración de Tailwind (`tailwind.config.ts`)

La configuración de Tailwind incluye:
- Sistema de colores personalizado con variables CSS
- Soporte para modo oscuro (basado en clases)
- Valores de radio de borde personalizados
- Keyframes de animación
- Configuración de tema extendida

### Configuración de Vite (`vite.config.ts`)

Vite está configurado con:
- Plugin de React
- Alias de rutas (`@/` mapea a `src/`)
- Configuración de construcción optimizada

### Configuración de TypeScript (`tsconfig.json`)

TypeScript está configurado con:
- Modo estricto habilitado
- Mapeo de rutas para imports limpios
- Soporte para React JSX
- Sistema de módulos ESNext

## Páginas y Componentes {#español-páginas-y-componentes}

### Páginas Disponibles

1. **Index (Página de Inicio)** - `/`
   - Sección hero con CTA
   - Sección de beneficios/características
   - Testimonios
   - Sección de FAQ
   - Suscripción al newsletter

2. **Página de Ventas** - `/sales`
   - Presentación problema/solución
   - Características y módulos del producto
   - Paquetes de precios
   - Sección de bonos
   - Información de garantía
   - Sección de FAQ
   - CTA final con urgencia

3. **Página de Curso** - `/course`
   - Hero del curso con estadísticas
   - Sección de qué aprenderás
   - Currículo completo con módulos
   - Información del instructor
   - Bonos exclusivos
   - Botones de llamada a la acción

4. **Blog** - `/blog`
   - Listado de blog con categorías
   - Artículos destacados
   - Últimos artículos
   - Funcionalidad de búsqueda
   - Suscripción al newsletter
   - Filtrado por categoría

5. **Publicación del Blog** - `/blog/:id`
   - Contenido completo de la publicación
   - Información del autor
   - Artículos relacionados
   - Botones de compartir/guardar
   - Suscripción al newsletter
   - Sección de comentarios (lista para integración)

6. **Inicio de Sesión** - `/login` (ruta no activa por defecto)
   - Formulario de inicio de sesión con email/contraseña
   - Listo para integración con backend

7. **Registro** - `/register` (ruta no activa por defecto)
   - Formulario de registro
   - Listo para integración con backend

### Componentes Disponibles

#### Componentes Comunes (`src/components/common/`)
- **Gallery**: Galería de imágenes con funcionalidad de lightbox
- **LanguageSwitcher**: Menú desplegable de cambio de idioma
- **Modal**: Diálogo modal reutilizable
- **Slider**: Carrusel/deslizador para imágenes o contenido
- **Table**: Componente de tabla de datos
- **Toast**: Mensajes de notificación toast

#### Componentes UI (`src/components/ui/`)
- **Button**: Componente de botón estilizado con variantes
- **Card**: Componente contenedor de tarjeta
- **Input**: Componente de entrada de formulario
- **Section**: Contenedor de sección con espaciado consistente

#### Componentes de Diseño
- **Navigation**: Barra de navegación principal con menú móvil
- **Footer**: Pie de página del sitio con enlaces sociales

## Internacionalización (i18n) {#español-internacionalización-i18n}

CreatorFlow usa i18next para internacionalización con soporte para inglés y español.

### Archivos de Idioma
- `src/i18n/en.json` - Traducciones en inglés
- `src/i18n/es.json` - Traducciones en español

### Cómo Funciona
1. El idioma se detecta desde la configuración del navegador o localStorage
2. El idioma predeterminado es inglés
3. Los usuarios pueden cambiar de idioma usando el componente LanguageSwitcher
4. El idioma seleccionado se guarda en localStorage

### Agregar Traducciones

Para agregar una nueva traducción:
1. Agrega la clave a ambos archivos `en.json` y `es.json`
2. Usa el hook `useTranslation` en tu componente:
```typescript
import { useTranslation } from 'react-i18next';

const MiComponente = () => {
  const { t } = useTranslation();
  return <h1>{t('miClave')}</h1>;
};
```

### Agregar un Nuevo Idioma
1. Crea un nuevo archivo JSON en `src/i18n/` (ej: `fr.json`)
2. Agrégalo a los recursos en `src/i18n/index.ts`:
```typescript
import fr from "./fr.json";
const resources = {
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr }, // Agregar nuevo idioma
};
```

## Temas y Modo Oscuro {#español-temas-y-modo-oscuro}

### Implementación del Modo Oscuro

El modo oscuro se implementa usando:
- Variables CSS para colores del tema
- Estrategia `class` (agrega/elimina la clase `dark` en `<html>`)
- Persistencia en localStorage
- Detección de preferencias del sistema

### Cómo Funciona

1. **Detección de Tema**: Al cargar, la app verifica:
   - localStorage para la preferencia guardada
   - Preferencia del sistema si no hay preferencia guardada
   
2. **Alternancia de Tema**: Los usuarios pueden alternar el modo oscuro usando el icono sol/luna en la navegación

3. **Variables CSS**: Los colores se definen como variables CSS que cambian según el tema:
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
}
```

### Personalizar Colores

Edita `src/index.css` para personalizar el esquema de colores. El sistema de colores usa valores HSL para facilitar la manipulación.

## Enrutamiento {#español-enrutamiento}

El enrutamiento se maneja con React Router DOM. Las rutas se definen en `src/App.tsx`:

```typescript
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/sales" element={<SalesPage />} />
  <Route path="/course" element={<CourseLanding />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/blog/:id" element={<BlogPost />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

### Agregar Nuevas Rutas

1. Crea un nuevo componente de página en `src/pages/`
2. Impórtalo en `src/App.tsx`
3. Agrega un nuevo elemento `<Route>`
4. Opcionalmente, agrega un enlace en el componente Navigation

## Guía de Personalización {#español-guía-de-personalización}

### Cambiar Branding
1. Edita `src/config.ts`:
   - Actualiza `brand.name` y `brand.logo`
   - Cambia `brand.primaryColor` y `brand.secondaryColor`

### Actualizar Contenido
1. **Contenido de Texto**: Edita los archivos de idioma en `src/i18n/`
2. **Imágenes**: Actualiza las URLs en `src/config.ts` o agrega archivos a `public/`
3. **Testimonios**: Edita el array `testimonials` en `src/config.ts`
4. **FAQ**: Edita el array `faq` en `src/config.ts`

### Personalizar Estilos
1. **Estilos Globales**: Edita `src/index.css`
2. **Configuración de Tailwind**: Modifica `tailwind.config.ts` para personalización del tema
3. **Estilos de Componentes**: Usa clases de Tailwind directamente en los componentes

### Agregar Nuevas Páginas
1. Crea componente en `src/pages/TuPagina.tsx`
2. Agrega ruta en `src/App.tsx`
3. Agrega enlace de navegación en `src/components/Navigation.tsx`
4. Agrega traducciones en los archivos de idioma

### Integrar Formularios
Los formularios actualmente son solo UI. Para agregar funcionalidad:
1. Instala una biblioteca de formularios (React Hook Form está incluido)
2. Agrega URLs de endpoints del backend
3. Maneja el envío del formulario
4. Agrega manejo de errores y validación

## Despliegue {#español-despliegue}

### Construir para Producción

```bash
npm run build
```

Esto crea una construcción optimizada para producción en la carpeta `dist/`.

### Previsualizar Construcción de Producción

```bash
npm run preview
```

### Plataformas de Despliegue

#### Vercel
1. Sube tu código a GitHub
2. Importa el proyecto en Vercel
3. Vercel detecta automáticamente la configuración de Vite
4. Despliega (comando de build: `npm run build`, salida: `dist`)

#### Netlify
1. Sube tu código a GitHub
2. Agrega un nuevo sitio en Netlify
3. Conecta el repositorio
4. Configuración de build:
   - Comando de build: `npm run build`
   - Directorio de publicación: `dist`
5. Despliega

#### GitHub Pages
1. Instala gh-pages: `npm install --save-dev gh-pages`
2. Agrega a package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Actualiza `vite.config.ts` con ruta base
4. Ejecuta `npm run deploy`

### Variables de Entorno

Para datos sensibles (claves API, etc.), crea un archivo `.env`:
```
VITE_API_KEY=tu_clave_aqui
```

Accede en el código: `import.meta.env.VITE_API_KEY`

## Solución de Problemas {#español-solución-de-problemas}

### Problemas Comunes

**Puerto ya en uso**
```bash
# Matar proceso en el puerto 5173 (macOS/Linux)
lsof -ti:5173 | xargs kill -9

# O usa un puerto diferente
npm run dev -- --port 3000
```

**Errores de módulo no encontrado**
```bash
# Limpia caché y reinstala
rm -rf node_modules package-lock.json
npm install
```

**Errores de TypeScript**
- Asegúrate de que todos los archivos tengan tipos TypeScript apropiados
- Verifica la configuración de `tsconfig.json`
- Reinicia el servidor TypeScript en tu IDE

**La construcción falla**
- Verifica la versión de Node.js (debe ser 16+)
- Limpia el caché de construcción: `rm -rf dist`
- Verifica errores de sintaxis en el código

**El modo oscuro no funciona**
- Asegúrate de que la clase `dark` se agregue al elemento `<html>`
- Verifica las variables CSS en `src/index.css`
- Verifica que la configuración de Tailwind tenga `darkMode: 'class'`

**i18n no funciona**
- Verifica que los archivos de idioma sean JSON válidos
- Verifica la inicialización de i18n en `src/i18n/index.ts`
- Verifica la consola del navegador para errores

## Preguntas Frecuentes {#español-preguntas-frecuentes}

**P: ¿Necesito saber programar para usar esta plantilla?**
R: Se recomienda conocimiento básico de React, TypeScript y edición de archivos. La plantilla está bien documentada y estructurada para facilitar la personalización.

**P: ¿Puedo usarla para múltiples proyectos?**
R: Sí, siempre que respetes los términos de la licencia MIT.

**P: ¿Cómo cambio el favicon?**
R: Reemplaza `public/favicon.ico` con tu propio archivo de icono.

**P: ¿Cómo agrego analytics?**
R: Agrega tu script de analytics (Google Analytics, etc.) en `index.html` dentro de la sección `<head>`.

**P: ¿Cómo actualizo las dependencias?**
R: Ejecuta `npm update` para actualizar a las últimas versiones compatibles, o edita `package.json` y ejecuta `npm install`.

**P: ¿Cómo agrego un formulario real con integración de backend?**
R: Puedes integrar con servicios como Formspree, Getform o tu propia API de backend. Actualiza los manejadores de envío de formularios en los componentes relevantes.

**P: ¿Cómo cambio un texto y lo traduzco después?**
R: Todo el texto visible se gestiona en los archivos de idioma (`src/i18n/en.json` y `src/i18n/es.json`). Edita los valores en el archivo correspondiente y agrega la misma clave al otro archivo de idioma para la traducción.

**P: ¿Puedo agregar más idiomas?**
R: ¡Sí! Crea un nuevo archivo JSON en `src/i18n/` y agrégalo a los recursos en `src/i18n/index.ts`.

**P: ¿Cómo personalizo colores más allá del archivo de configuración?**
R: Edita las variables CSS en `src/index.css` para colores globales, o modifica `tailwind.config.ts` para personalización específica de Tailwind.

**P: ¿Esta plantilla es amigable para SEO?**
R: Sí, la plantilla incluye HTML semántico y etiquetas meta. Para mejor SEO, asegúrate de personalizar las etiquetas meta en `index.html` y agregar datos estructurados si es necesario.

**P: ¿Puedo eliminar páginas que no necesito?**
R: Sí, simplemente elimina la ruta de `src/App.tsx` y borra el archivo de página correspondiente. También actualiza el componente de navegación.

## Contribuir {#español-contribuir}

¡Las contribuciones son bienvenidas! Si te gustaría contribuir:
1. Haz un fork del repositorio
2. Crea una rama de característica
3. Realiza tus cambios
4. Prueba exhaustivamente
5. Envía un pull request

Por favor, asegúrate de que tu código siga el estilo existente e incluya documentación apropiada.

## Licencia {#español-licencia}

Licencia MIT - Libre para uso personal y comercial.

---

**Thank you for using CreatorFlow! / ¡Gracias por usar CreatorFlow!**
