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


### 3. React-toastify

Alertas al puntuar un articulo:

```bash
npm install react-toastify
```

---

## Desarrollando el Front

---

### Enfoque general
La forma en la que he organizado y desarrollado el frontend con React sigue una estructura clara y escalable basada en **páginas** y **componentes reutilizables**.

1. **Identificar las páginas necesarias**  
   Primero pienso en **qué páginas necesita mi aplicación**, como por ejemplo:
   - Página de inicio
   - Página de login/registro
   - Página de perfil
   - Listado de ciudades o monumentos
   - Página de detalles

2. **Diseñar los componentes que necesita cada página**  
   Luego, para cada página, creo los **componentes** que la forman, como:
   - Formularios (`FormularioLogin`, `FormularioRegistro`)
   - Listados (`ListaCiudades`, `TarjetaMonumento`)
   - Headers, Footers, botones reutilizables, etc.

3. **Integrar cada página en el enrutador**  
   Uso un enrutador (React Router DOM) para asignar una **ruta** a cada página. Esto permite que el usuario pueda navegar entre ellas fácilmente.

### 📂 Componentes

- **Header.jsx**: barra de navegación principal.
- **Footer.jsx**: pie de página profesional con enlaces y redes sociales.
- **Layout.jsx**: contenedor común para header, footer y contenido.
- **MapaCiudades.jsx**: componente de mapa interactivo con marcadores y popups.
- **Ciudad.jsx**: ficha detallada de una ciudad (API `/api/ciudad/:id`).
- **Acerca.jsx**: sección “Acerca de” con valores, equipo y newsletter.
- **Articulos**: tres tipos de secciones que nos podemos encontrar por ciudad.
- **MonumentosCiudad**: monumentos que existen en una ciudad.
- **EventosCiudad**: eventos que existen en una ciudad.
- **ComidasCiudad**: comidas que existen en una ciudad.
### 📄 Páginas (Pages)

- **HomePage.jsx**: portada con hero, CTA y preview de mapa.
- **AcercaPage.jsx**: página completa “Acerca de PatriGod”.
- **LoginPage.jsx**: formulario de autenticación.
- **CiudadPage.jsx**: wrapper para `Ciudad.jsx` que obtiene ID de la URL.
- **MonumentosCiudadPage**: monumentos que existen en una ciudad.
- **EventosCiudadPage**: eventos que existen en una ciudad.
- **ComidasCiudadPage**: comidas que existen en una ciudad.


#### Componentes a destacar

##### 🔐 Registro y Logeo

Estos componentes son especiales porque los he desarrollado utilizando la **librería Material UI**.  
Decidí hacerlo así porque Material UI ofrece plantillas visuales modernas y accesibles, y aproveché una de sus plantillas predefinidas para el diseño del **formulario de Login**.

### 📋 Plantilla utilizada

Para el login y registro me basé en una [plantilla oficial de MUI](https://mui.com/material-ui/getting-started/templates/sign-in-side/) que incluye:
- Campos de entrada (`TextField`) para el usuario y contraseña.
- Botón de envío (`Button`) estilizado.
- Iconografía, espaciado y responsividad integrada.

### 🧩 Componentes desarrollados

- `FormularioLogin.jsx`
- `FormularioRegistro.jsx`

Ambos están personalizados para adaptarse a las necesidades de mi backend con JWT, conectándose al servicio de autenticación mediante Axios.

Esto permite que el login sea visualmente profesional y funcional desde el primer momento, con validaciones y estilos consistentes.

---



---


### Servicios JWT + Libreria AXIOS
Para gestionar la autenticación con JWT desde el frontend, he creado una carpeta llamada `servicios` que contiene dos archivos principales:
- api.js
- auth.js

---

#### 📁 `api.js`: Instancia personalizada de Axios

```js
import axios from 'axios';
import { getToken } from './auth';
```
#### ✅ ¿Qué hace este archivo?

Este archivo define una instancia personalizada de Axios para realizar peticiones al backend. Se configura de la siguiente manera:

    Base URL: apunta a http://localhost:8080/api, donde está expuesta la API del backend.

    Headers por defecto:

        Content-Type: se indica que se enviarán datos en formato JSON.

        Accept: se espera recibir respuestas en formato JSON.
---
```js
const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  baseURL: 'http://localhost:8080/api',
});
```
#### 🔐 Interceptor de solicitudes

Antes de cada solicitud, se ejecuta un interceptor que:

    Obtiene el token JWT almacenado en el navegador (getToken()).

    Si existe el token, lo añade al header de autorización como:
    Authorization: Bearer <token>

De este modo, todas las peticiones llevan automáticamente el token, y pueden acceder a rutas protegidas.

```js
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
      config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

#### 📁 auth.js: Manejo del Token en el localStorage
Este archivo contiene funciones que gestionan el almacenamiento del token JWT en el navegador:
```js
/**
 * Obtener el token almacenado.
 */
export const getToken = () => localStorage.getItem('token');

/**
 * Guardar el token después de hacer login.
 */
export const setTokenLocal = (token) => {
  localStorage.setItem('token', token);
};

/**
 * Eliminar el token al cerrar sesión o si expira.
 */
export const clearToken = () => {
  localStorage.removeItem('token');
};
```
--- 

### 🎯 Notificaciones al puntuar un artículo

Para mejorar la experiencia del usuario al puntuar un artículo de cada ciudad, se han implementado notificaciones visuales utilizando una librería externa.

---

#### 📦 Instalación de `react-toastify`

Primero, instalo la librería con el siguiente comando:

```bash
npm install react-toastify
```
#### 🔔 Implementación de las notificaciones

Una vez instalada, puedes utilizarla para mostrar notificaciones dependiendo del resultado de la solicitud al enviar la puntuación.

Ejemplo de implementación:
```java
  const postPuntuacion = async () => {
    if (token) {
      try {
        const response = await api.post("/puntuacion", {
          usuario: { id: user.id },
          articulo: { id: idMonumento, type: "monumento" },
          puntuacion: valoracion
        });

        if (response.status === 200) {
          toast.success("¡Puntuación enviada correctamente! 🎉");
        } else {
          toast.error("No se pudo enviar la puntuación.");
        }
      } catch (error) {
        console.error(error);
        toast.error("Hubo un error. Inténtalo más tarde.");
      }
    } else {
      toast.warning("Debes iniciar sesión para puntuar.");
      navigate("/login");
    }
  };
```
✅ Adenás habria que configurar en la salida del componente donde queremos que se encuentre la notificacion:
```jsx
<ToastContainer position="top-center" autoClose={3000} />
```

##  Autor

Proyecto realizado por **Alejandro Copado López**.  

---