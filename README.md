# 🌍 PatriGod FrontEnd

Este repositorio contiene el **Frontend** de la aplicación web **PatriGod**.

---

## 📚 Índice

1. [Creación del proyecto](#creación-del-proyecto)
2. [Estructura del proyecto](#estructura-del-proyecto)
3. [Configuración de rutas](#configuración-de-rutas)
4. [Librerías utilizadas](#librerías-utilizadas)
5. [Desarrollando el Front](#desarrollando-el-front)
6. [Autor](#autor)

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

---

##  Configuración de rutas

Para la navegación entre páginas se utiliza **React Router DOM**:

```bash
npm install react-router-dom
```

La configuración de las rutas se realiza en el archivo `App.jsx`.

---

## Librerías utilizadas

###  Material UI 🧰

Para diseño y componentes estilizados:
```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

Material UI ofrece componentes listos para producción y theming flexible.

### 2. React Leaflet + Leaflet

Visualización de mapas:
```bash
npm install leaflet react-leaflet@next
```

+ **leaflet**: motor de mapas.
+ **react-leaflet**: integración con React.

> **Importante**: En `src/main.jsx` importa `import 'leaflet/dist/leaflet.css';` antes de renderizar.

---

## Desarrollando el Front

### 📂 Componentes

- **Header.jsx**: barra de navegación principal.
- **Footer.jsx**: pie de página profesional con enlaces y redes sociales.
- **Layout.jsx**: contenedor común para header, footer y contenido.
- **MapaCiudades.jsx**: componente de mapa interactivo con marcadores y popups.
- **Ciudad.jsx**: ficha detallada de una ciudad (API `/api/ciudad/:id`).
- **Acerca.jsx**: sección “Acerca de” con valores, equipo y newsletter.

### 📄 Páginas (Pages)

- **HomePage.jsx**: portada con hero, CTA y preview de mapa.
- **AcercaPage.jsx**: página completa “Acerca de PatriGod”.
- **LoginPage.jsx**: formulario de autenticación.
- **CiudadPage.jsx**: wrapper para `Ciudad.jsx` que obtiene ID de la URL.

---


##  Autor

Proyecto realizado por **Alejandro Copado López**.  

---