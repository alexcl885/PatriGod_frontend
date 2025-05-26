# 🌍 PatriGod FrontEnd

Este repositorio contiene el **Frontend** de la aplicación web **PatriGod**.

---

## 📚 Índice

1. [Creación del proyecto](#creación-del-proyecto)
2. [Estructura del proyecto](#estructura-del-proyecto)
3. [Configuración de rutas](#configuración-de-rutas)
4. [Librerías utilizadas](#librerías-utilizadas)
5. [Desarrollando el Front](#desarrollando-el-front)
    - [Enfoque general](#enfoque-general)
    - [Componentes principales](#componentes-principales)
    - [Ejemplos de uso de componentes](#ejemplos-de-uso-de-componentes)
    - [Buenas prácticas y estructura recomendada](#buenas-prácticas-y-estructura-recomendada)
6. [Servicios y autenticación JWT](#servicios-y-autenticación-jwt)
7. [Notificaciones y experiencia de usuario](#notificaciones-y-experiencia-de-usuario)
8. [Hooks personalizados](#hooks-personalizados)
9. [Contextos y gestión de estado global](#contextos-y-gestión-de-estado-global)
10. [Testing](#testing)
11. [Despliegue](#despliegue)
12. [Autor](#autor)

---

## Creación del proyecto

El proyecto fue creado utilizando **Vite**: 📁

```bash
npm create vite@latest patrigod_front
```

Inicialmente se ha dejado el proyecto desde cero para construir la aplicación de forma estructurada y organizada.

---

## Estructura del proyecto

Se han creado las siguientes carpetas 🗂️ principales para organizar el código:

- `componentes/` → Componentes reutilizables de la interfaz.
- `contexto/` → Gestión del estado global mediante contextos.
- `paginas/` → Páginas principales de la aplicación.
- `servicios/` → Servicios para conexión con APIs u otras funciones externas.

El primer paso ha sido crear toda la estructura base. A partir de aquí, se irá desarrollando el proyecto progresivamente.

### Estructura de carpetas recomendada

```
src/
│
├── componentes/           # Componentes reutilizables (Header, Footer, etc.)
│   ├── Layout/
│   ├── MapaCiudades/
│   ├── Registro/
│   ├── EnviarEmailUsuarios/
│   └── ...otros
│
├── contexto/              # Contextos de React (UserContext, etc.)
│
├── hooks/                 # Hooks personalizados (useFetch, useAuth, etc.)
│
├── paginas/               # Páginas principales (HomePage, CiudadPage, etc.)
│
├── servicios/             # Lógica de acceso a APIs y autenticación
│
├── utils/                 # Utilidades y helpers generales
│
├── assets/                # Imágenes, iconos, fuentes, etc.
│
├── App.jsx                # Configuración de rutas y providers
├── main.jsx               # Punto de entrada de la app
└── index.css              # Estilos globales
```

---

## Componentes principales

A continuación se describen los componentes más importantes del proyecto, su función y recomendaciones de uso:

#### **Header.jsx**
- **Propósito:** Barra de navegación principal, muestra enlaces a las páginas clave y el estado de autenticación del usuario.
- **Características:** Responsive, incluye logo, enlaces y menú de usuario.
- **Uso recomendado:** Importar en el layout principal para que esté presente en todas las páginas.

#### **Footer.jsx**
- **Propósito:** Pie de página profesional con enlaces útiles, información de contacto y redes sociales.
- **Características:** Diseño consistente, enlaces externos, copyright.
- **Uso recomendado:** Siempre al final del layout.

#### **Layout.jsx**
- **Propósito:** Contenedor común que envuelve el header, footer y el contenido de cada página.
- **Características:** Facilita la estructura y el diseño global.
- **Ejemplo:**
  ```jsx
  import Header from './Header';
  import Footer from './Footer';

  const Layout = ({ children }) => (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
  export default Layout;
  ```

#### **MapaCiudades.jsx**
- **Propósito:** Muestra un mapa interactivo con marcadores de ciudades usando React Leaflet.
- **Características:** Marcadores dinámicos, popups con información, integración con rutas.
- **Uso recomendado:** En la página principal o en páginas de exploración de ciudades.

#### **Ciudad.jsx**
- **Propósito:** Ficha detallada de una ciudad, mostrando información, imágenes, monumentos, eventos y comidas.
- **Características:** Obtiene datos desde `/api/ciudad/:id`, muestra secciones relacionadas.
- **Uso recomendado:** Como componente principal en `CiudadPage.jsx`.

#### **Acerca.jsx**
- **Propósito:** Sección “Acerca de” con valores, equipo y newsletter.
- **Características:** Presenta la misión, visión y equipo del proyecto.

#### **Articulos**
- **Propósito:** Componente genérico para mostrar artículos (monumentos, eventos, comidas) de una ciudad.
- **Características:** Reutilizable, acepta props para tipo de artículo y datos.

#### **MonumentosCiudad, EventosCiudad, ComidasCiudad**
- **Propósito:** Listados específicos de monumentos, eventos y comidas de una ciudad.
- **Características:** Consumen la API y muestran tarjetas o listas de cada elemento.

#### **FormularioLogin.jsx & FormularioRegistro.jsx**
- **Propósito:** Formularios de autenticación, basados en Material UI.
- **Características:** Validación, integración con backend, feedback visual.
- **Ejemplo de uso:**
  ```jsx
  <FormularioLogin onSuccess={handleLoginSuccess} />
  ```

#### **EnviarEmailUsuarios.jsx**
- **Propósito:** Permite enviar emails masivos a los usuarios desde el panel de administración.
- **Características:** Formulario de asunto y mensaje, integración con backend, feedback visual.

#### **RankingPage & RankingArticulosPage**
- **Propósito:** Muestran rankings de usuarios y artículos más valorados.
- **Características:** Listados ordenados, integración con la API, visualización atractiva.

#### **GestionUsuariosPage & DetallesUsuarioPage**
- **Propósito:** Gestión y detalle de usuarios para administradores.
- **Características:** Listados, edición, borrado y visualización de datos de usuario.

#### **AddNewMonumentoPage, AddNewEventoPage, AddNewComidaPage**
- **Propósito:** Formularios para añadir nuevos monumentos, eventos o comidas a una ciudad.
- **Características:** Validación, subida de imágenes, integración con la API.

---

## Hooks personalizados

### **useAuth**
- **Propósito:** Gestiona el estado de autenticación y usuario.
- **Uso:** Proporciona funciones como login, logout y acceso al usuario actual.

### **useFetch**
- **Propósito:** Facilita la obtención de datos desde la API con manejo de loading y errores.
- **Ejemplo:**
  ```js
  const { data, loading, error } = useFetch('/api/ciudades');
  ```

### **useForm**
- **Propósito:** Maneja el estado y validación de formularios.
- **Características:** Reduce el boilerplate en formularios complejos.

---

## Contextos y gestión de estado global

### **UserContext**
- **Propósito:** Provee el usuario autenticado y funciones de login/logout a toda la app.
- **Uso:**
  ```jsx
  import { useContext } from 'react';
  import { UserContext } from '../contexto/UserContext';

  const { user, login, logout } = useContext(UserContext);
  ```

### **ThemeContext** (opcional)
- **Propósito:** Permite cambiar el tema visual (oscuro/claro) en toda la app.

---

## Utils y helpers

- **validaciones.js:** Funciones para validar emails, contraseñas, etc.
- **formateo.js:** Helpers para formatear fechas, textos, etc.
- **constantes.js:** Constantes globales como endpoints, mensajes, etc.

---

## Testing

### **Pruebas unitarias**
- Utiliza [Jest](https://jestjs.io/) y [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) para testear componentes y hooks.
- Ejemplo de test:
  ```js
  import { render, screen } from '@testing-library/react';
  import Header from '../componentes/Header';

  test('muestra el logo', () => {
    render(<Header />);
    expect(screen.getByAltText(/PatriGod/i)).toBeInTheDocument();
  });
  ```

### **Pruebas de integración**
- Testea flujos completos como login, navegación y formularios.

---

## Despliegue

### **Build de producción**
```bash
npm run build
```
El resultado estará en la carpeta `/dist`.

### **Despliegue en Vercel, Netlify o servidor propio**
- Sube el contenido de `/dist` a tu hosting.
- Configura el backend para servir el frontend en rutas no API.

### **Variables de entorno**
- Usa `.env` para configurar endpoints y claves sensibles.
- Ejemplo:
  ```
  VITE_API_URL=http://localhost:8080/api
  ```

---

## Recomendaciones de desarrollo

- **Commits atómicos:** Haz commits pequeños y descriptivos.
- **Convenciones de nombres:** Usa PascalCase para componentes y camelCase para funciones/variables.
- **Documenta tus componentes:** Usa comentarios JSDoc y prop-types.
- **Mantén el código limpio:** Elimina código muerto y usa linters (ESLint, Prettier).
- **Actualiza dependencias:** Mantén las librerías al día para evitar vulnerabilidades.

---

## Autor

Proyecto realizado por **Alejandro Copado López**.