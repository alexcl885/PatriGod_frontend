# 🌍 PatriGod FrontEnd

Bienvenido al **Frontend de PatriGod**, una plataforma web moderna para descubrir, valorar y gestionar ciudades Patrimonio de la Humanidad, sus monumentos, eventos y gastronomía. Este proyecto está construido con **React**, **Material UI**, **Vite** y una arquitectura robusta basada en componentes y contexto global.

---

## 📑 Índice

1. [Características principales](#características-principales)
2. [Estructura del proyecto](#estructura-del-proyecto)
3. [Instalación y dependencias necesarias](#instalación-y-dependencias-necesarias)
4. [Rutas principales](#rutas-principales)
5. [Filosofía de desarrollo de páginas](#filosofía-de-desarrollo-de-páginas)
6. [Componentes destacados](#componentes-destacados)
    - [Layout general](#layout-general)
    - [Componente de envío de email a usuarios](#componente-de-envío-de-email-a-usuarios)
    - [Chat IA integrado](#chat-ia-integrado)
    - [Gestión de usuarios (solo admin)](#gestión-de-usuarios-solo-admin)
    - [Valoración de artículos](#valoración-de-artículos)
    - [Mapa interactivo](#mapa-interactivo)
    - [React-toastify](#react-toastify)
    - [Rankings y valoraciones](#rankings-y-valoraciones)
    - [Servicios y autenticación](#servicios-y-autenticación)
9. [Autor](#autor)

---

##  Características principales

- **Explora ciudades**: Información detallada, mapas interactivos y listados de monumentos, eventos y comidas típicas.
- **Valoraciones y rankings**: Valora monumentos, eventos y comidas. Consulta rankings en tiempo real.
- **Gestión de usuarios**: Registro, login, edición de perfil, cambio de contraseña y gestión avanzada para administradores.
- **Panel de administración**: Gestión de usuarios, artículos y envío de emails masivos.
- **Chat IA**: Asistente inteligente integrado para resolver dudas sobre la app y el patrimonio.
- **Notificaciones visuales**: Feedback inmediato con `react-toastify`.
- **Diseño responsive y profesional**: Basado en Material UI, con temas personalizados y animaciones.

---

## Estructura del proyecto
La estructura del proyecto está pensada para ser escalable, clara y fácil de mantener. Cada carpeta tiene una responsabilidad concreta y los nombres son autoexplicativos.

```
src/
│
├── componentes/
│   ├── AddNewComida/
│   │   └── AddNewComida.jsx
│   ├── AddNewEvento/
│   │   └── AddNewEvento.jsx
│   ├── AddNewMonumento/
│   │   └── AddNewMonumento.jsx
│   ├── Articulos/
│   │   └── Articulos.jsx
│   ├── ChatSideBar/
│   │   └── ChatSideBar.jsx
│   ├── Ciudad/
│   │   └── Ciudad.jsx
│   ├── Comida/
│   │   └── Comida.jsx
│   ├── ComidasCiudad/
│   │   └── ComidasCiudad.jsx
│   ├── DetallesUsuario/
│   │   └── DetallesUsuario.jsx
│   ├── EnviarEmailUsuarios/
│   │   └── EnviarEmailUsuarios.jsx
│   ├── Evento/
│   │   └── Evento.jsx
│   ├── EventosCiudad/
│   │   └── EventosCiudad.jsx
│   ├── Footer/
│   │   └── Footer.jsx
│   ├── GestionUsuarios/
│   │   └── GestionUsuarios.jsx
│   ├── Header/
│   │   └── Header.jsx
│   ├── Layout/
│   │   └── Layout.jsx
│   ├── LoginUI/
│   │   ├── componentsLogin/
│   │   │   ├── Content.jsx
│   │   │   ├── CustomIcons.jsx
│   │   │   └── SignInCard.jsx
│   │   └── shared-theme/
│   │       ├── AppTheme.jsx
│   │       └── customizations/
│   ├── MapaCiudades/
│   │   └── MapaCiudades.jsx
│   ├── Monumento/
│   │   └── Monumento.jsx
│   ├── MonumentosCiudad/
│   │   └── MonumentosCiudad.jsx
│   ├── Ranking/
│   │   └── Ranking.jsx
│   ├── RankingArticulos/
│   │   └── RankingArticulos.jsx
│   ├── RankingComidas/
│   │   └── RankingComidas.jsx
│   ├── RankingEventos/
│   │   └── RankingEventos.jsx
│   ├── RankingMonumentos/
│   │   └── RankingMonumentos.jsx
│   ├── Registro/
│   │   ├── RegisterInSide.jsx
│   │   ├── componentsLogin/
│   │   │   ├── Content.jsx
│   │   │   ├── CustomIcons.jsx
│   │   │   └── SignInCard.jsx
│   │   └── shared-theme/
│   │       ├── AppTheme.jsx
│   │       └── customizations/
│   ├── ScrollToTop/
│   │   └── ScrollToTop.jsx
│   └── ...otros
│
├── contexto/
│   └── UserContext.jsx
│
├── paginas/
│   ├── AcercaPage.jsx
│   ├── CiudadPage.jsx
│   ├── ComidaPage.jsx
│   ├── ComidasCiudadPage.jsx
│   ├── DetallesUsuarioPage.jsx
│   ├── ErrorPage.jsx
│   ├── EventoPage.jsx
│   ├── EventosCiudadPage.jsx
│   ├── GestionUsuariosPage.jsx
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   ├── MonumentoPage.jsx
│   ├── MonumentosCiudadPage.jsx
│   ├── RankingArticulosPage.jsx
│   ├── RankingPage.jsx
│   └── ...otros
│
├── servicios/
│   └── api.js
│
├── App.jsx
├── main.jsx
└── index.css
```



**Notas sobre la estructura:**
- Cada carpeta de `componentes/` puede contener subcomponentes, hojas de estilos y archivos auxiliares propios.
- Los archivos en `paginas/` representan vistas completas asociadas a rutas de React Router.
- `servicios/api.js` centraliza todas las llamadas HTTP y la gestión de autenticación.
- `contexto/` permite compartir estado global (usuario, token, etc.) en toda la app.
- El archivo `App.jsx` define el router y el layout general, mientras que `main.jsx` es el punto de entrada de la aplicación.
- Puedes añadir más carpetas o archivos según crezcan las funcionalidades del proyecto.

---

## Instalación y dependencias necesarias

Antes de ejecutar el proyecto, asegúrate de instalar las siguientes dependencias principales:

```bash
npm install react react-dom react-router-dom
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
npm install axios
npm install react-toastify
npm install leaflet react-leaflet
```

> **Nota:** Si usas Vite (recomendado), asegúrate de tenerlo instalado globalmente o como dependencia de desarrollo:
```bash
npm install vite --save-dev
```

Para desarrollo local, ejecuta:
```bash
npm install
npm run dev
```

---

## Rutas principales

La navegación se gestiona con React Router. Ejemplo de configuración en `App.jsx`:

```jsx
// ...existing code...
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "ciudad/:id", element: <CiudadPage /> },
      { path: "ciudad/:id/monumentos", element: <MonumentosCiudadPage /> },
      { path: "ciudad/:id/monumentos/:idMonumento", element: <MonumentoPage /> },
      { path: "ciudad/:id/eventos", element: <EventosCiudadPage /> },
      { path: "ciudad/:id/eventos/:idEvento", element: <EventoPage /> },
      { path: "ciudad/:id/comidas", element: <ComidasCiudadPage /> },
      { path: "ciudad/:id/comidas/:idComida", element: <ComidaPage /> },
      // ...más rutas...
    ]
  }
]);
// ...existing code...
```
--- 

## Documentación de rutas del frontend 

A continuación se muestra una tabla resumen de las rutas principales del frontend de PatriGod, indicando el acceso permitido según el rol del usuario:

| Ruta                                      | Descripción                                      | Rol requerido         |
|--------------------------------------------|--------------------------------------------------|-----------------------|
| `/`                                       | Página principal (Home)                          | Público               |
| `/login`                                  | Login de usuario                                 | Público               |
| `/registro`                               | Registro de usuario                              | Público               |
| `/ciudad/:id`                             | Detalle de ciudad                                | Público               |
| `/ciudad/:id/monumentos`                  | Listado de monumentos de la ciudad               | Público               |
| `/ciudad/:id/monumentos/:idMonumento`     | Detalle de monumento                             | Público               |
| `/ciudad/:id/eventos`                     | Listado de eventos de la ciudad                  | Público               |
| `/ciudad/:id/eventos/:idEvento`           | Detalle de evento                                | Público               |
| `/ciudad/:id/comidas`                     | Listado de comidas típicas de la ciudad          | Público               |
| `/ciudad/:id/comidas/:idComida`           | Detalle de comida típica                         | Público               |
| `/ranking`                                | Ranking de ciudades                              | Público               |
| `/ranking/articulos`                      | Ranking de monumentos, eventos y comidas         | Público               |
| `/usuario/:id`                            | Perfil y detalles de usuario                     | Usuario autenticado   |
| `/usuarios`                               | Gestión de usuarios (panel admin)                | Administrador         |
| `/admin/email`                            | Envío de email masivo a usuarios                 | Administrador         |
| `/admin/articulos`                        | Gestión de artículos (crear/editar/borrar)       | Administrador         |
| `/admin/monumentos`                       | Gestión avanzada de monumentos                   | Administrador         |
| `/admin/eventos`                          | Gestión avanzada de eventos                      | Administrador         |
| `/admin/comidas`                          | Gestión avanzada de comidas                      | Administrador         |
| `/acerca`                                 | Página de información sobre la app               | Público               |
| `*` (cualquier otra)                      | Página de error 404                              | Público               |

**Leyenda de roles:**
- **Público:** Accesible para cualquier usuario, autenticado o no.
- **Usuario autenticado:** Requiere login (token JWT válido).
- **Administrador:** Requiere login y rol de administrador.

> **Nota:** Algunas rutas pueden mostrar funcionalidades adicionales (como valorar artículos o acceder al chat IA) solo si el usuario está autenticado.

---

## Filosofía de desarrollo de páginas

En este proyecto, la metodología principal consiste en crear **componentes reutilizables** para cada funcionalidad o elemento visual. Posteriormente, estos componentes se combinan para construir las diferentes **páginas** de la aplicación. Cada página se asocia a una **ruta** específica mediante React Router, lo que permite que se visualicen correctamente en la navegación de la app.

- **Componentes reutilizables:** Permiten mantener el código limpio, organizado y fácil de mantener.
- **Construcción de páginas:** Cada página importa y utiliza los componentes necesarios para mostrar la información o funcionalidad deseada.
- **Rutas:** Una vez creada la página, se añade a la configuración de rutas para que sea accesible desde la interfaz.

Esto facilita la escalabilidad y la claridad del proyecto, permitiendo añadir nuevas páginas o funcionalidades de forma sencilla y consistente.

## Componentes destacados

### Layout general

El **Layout** es el esqueleto principal de la aplicación. Se encarga de envolver todas las páginas con una estructura consistente que incluye cabecera, pie de página, el chat IA y el área principal donde se renderizan las diferentes rutas. Gracias al uso de `<Outlet />` de React Router, el contenido de cada página se inyecta dinámicamente en el layout, manteniendo siempre visibles los elementos comunes.

**Ventajas del Layout:**
- Proporciona una experiencia de usuario coherente en toda la app.
- Permite añadir componentes globales como el chat IA, el header y el footer sin repetir código.
- Facilita la navegación y la gestión de rutas anidadas.

**Estructura del Layout:**

```jsx
// src/componentes/Layout/Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ChatSidebar from "../ChatSideBar/ChatSideBar";

const Layout = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTop />
      <Header />
      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet /> {/* Aquí se renderiza la página correspondiente a la ruta */}
      </main>
      <Footer />
      <ChatSidebar /> {/* Chat IA siempre disponible */}
    </div>
  );
};

export default Layout;
```
---

### Componente de envío de email a usuarios

El proyecto incluye un componente específico para que los administradores puedan **enviar emails masivos** a los usuarios registrados desde el panel de administración.

- **Ubicación:**  
  `src/componentes/EnviarEmailUsuarios/EnviarEmailUsuarios.jsx`

- **Funcionalidad:**  
  Permite redactar un asunto y un mensaje, seleccionar destinatarios (todos o filtrados), y enviar el email directamente desde la interfaz. Utiliza formularios controlados y muestra notificaciones de éxito o error mediante `react-toastify`.

- **Interfaz:**  
  El formulario incluye campos para el asunto y el cuerpo del mensaje, así como opciones para seleccionar destinatarios. El botón de envío está deshabilitado mientras se procesa la petición.

- **Ejemplo de uso en la interfaz:**

  ```jsx
  // src/componentes/EnviarEmailUsuarios/EnviarEmailUsuarios.jsx
  <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
    <Typography variant="h6" gutterBottom>
      Enviar email a usuarios
    </Typography>
    <TextField
      label="Asunto"
      value={asunto}
      onChange={handleAsuntoChange}
      fullWidth
      sx={{ mb: 2 }}
    />
    <TextField
      label="Mensaje"
      value={mensaje}
      onChange={handleMensajeChange}
      fullWidth
      multiline
      minRows={4}
      sx={{ mb: 2 }}
    />
    {/* Selector de destinatarios si aplica */}
    <Button
      variant="contained"
      onClick={handleEnviar}
      disabled={enviando}
      fullWidth
    >
      {enviando ? "Enviando..." : "Enviar email"}
    </Button>
  </Box>
  ```

- **Feedback visual:**  
  Se muestra un toast de éxito o error tras el intento de envío.

Este componente facilita la comunicación directa entre los administradores y los usuarios de la plataforma, integrándose de forma sencilla y visual en el panel de administración.

---

### Chat IA integrado

El proyecto cuenta con un **Chat IA** accesible desde cualquier página, implementado como un sidebar flotante. Este chat permite a los usuarios registrados interactuar con un modelo de IA (Ollama) para resolver dudas sobre ciudades, monumentos, eventos, comidas o cualquier aspecto relacionado con el patrimonio.

#### Características del Chat IA

- **Accesibilidad global:** El botón de chat está siempre visible en la esquina inferior izquierda.
- **Autenticación:** Solo los usuarios logueados pueden enviar mensajes. Si no estás autenticado, se muestra un toast y se redirige al login.
- **Interfaz moderna:** Animaciones, avatares diferenciados para usuario y bot, scroll automático y diseño responsive.
- **Persistencia temporal:** El historial de la conversación se mantiene mientras el usuario no recargue la página.
- **Feedback visual:** Indicadores de carga ("Escribiendo...") y mensajes de error en caso de fallo de conexión.


#### Ejemplo de uso en el layout

```jsx
// src/componentes/Layout/Layout.jsx
const Layout = () => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    {/* ...Header y contenido... */}
    <Footer />
    <ChatSidebar /> {/* El chat IA está disponible en toda la app */}
  </div>
);    
```

#### Interfaz visual

- **Botón flotante:** Animado, con icono de chat y efecto pulse para llamar la atención.
- **Drawer lateral:** Se desliza desde la izquierda, con fondo degradado y cabecera personalizada.
- **Mensajes:** Diferenciados por color y alineación según el rol (usuario o IA), con avatares y animaciones de entrada.
- **Campo de entrada:** Permite enviar mensajes con Enter y soporta saltos de línea con Shift+Enter.

### Gestión de usuarios (solo admin)

La **gestión de usuarios** es una funcionalidad exclusiva para administradores, accesible desde la ruta `/usuarios`. Permite visualizar, buscar, filtrar, cambiar el estado (activo/inactivo) y modificar el rol de cualquier usuario registrado en la plataforma.

#### Funcionalidades principales

- **Listado de usuarios:** Visualiza todos los usuarios en tarjetas con información relevante (nombre, email, rol, estado, fecha de creación).
- **Búsqueda y filtrado:** Busca usuarios por nombre de usuario en tiempo real.
- **Paginación:** Navega fácilmente entre páginas si hay muchos usuarios.
- **Cambio de estado:** Activa o desactiva usuarios con un solo clic.
- **Cambio de rol:** Cambia el rol de usuario (entre "USUARIO" y "ADMINISTRADOR") mediante un selector y confirmación en un diálogo modal.
- **Feedback visual:** Notificaciones y estados de carga para cada acción.

#### Ejemplo de interacción para cambiar el rol de un usuario

```jsx
// src/componentes/GestionUsuarios/GestionUsuarios.jsx
const cambiarRolUsuario = async (id, nuevoRol) => {
  setRolEnProgreso(id);
  try {
    await api.put(`http://localhost:8080/api/admin/usuario/${id}/rol`, {
      username: user.username, // El admin autenticado
      tipo: nuevoRol
    });
    setUsuarios((prev) =>
      prev.map((u) => (u.id === id ? { ...u, tipo: nuevoRol } : u))
    );
  } catch (error) {
    // Manejo de errores y feedback visual
  } finally {
    setRolEnProgreso(null);
  }
};
```

#### Ejemplo de interfaz para el cambio de rol

```jsx
<FormControl size="small" disabled={rolEnProgreso === usuario.id}>
  <InputLabel id={`rol-label-${usuario.id}`}>Cambiar rol</InputLabel>
  <Select
    labelId={`rol-label-${usuario.id}`}
    value={usuario.tipo}
    label="Cambiar rol"
    onChange={(e) => cambiarRolUsuario(usuario.id, e.target.value)}
  >
    <MenuItem value="ADMINISTRADOR">ADMINISTRADOR</MenuItem>
    <MenuItem value="USUARIO">USUARIO</MenuItem>
  </Select>
</FormControl>
```

#### Seguridad y control

- Solo los administradores autenticados pueden acceder a esta sección y realizar cambios.
- Todas las acciones requieren autenticación y se validan en el backend.
- El frontend muestra estados de carga y deshabilita controles mientras se realiza una acción.

#### Experiencia visual

- Tarjetas con diseño atractivo y colores distintivos según el rol y estado.
- Botones y selectores accesibles y claros.
- Diálogos de confirmación para evitar cambios accidentales.

### Valoración de artículos

La **valoración de artículos** es una funcionalidad clave de PatriGod que permite a los usuarios registrados puntuar monumentos, eventos y comidas de cada ciudad. Estas valoraciones alimentan los rankings y ayudan a otros usuarios a descubrir lo mejor de cada destino.

#### ¿Cómo funciona?

- **Acceso:** Solo los usuarios autenticados pueden puntuar. Si un usuario no está logueado, se le muestra un aviso y se le redirige al login.
- **Interfaz intuitiva:** Cada página de detalle de monumento, evento o comida muestra un componente de estrellas (`Rating`) para seleccionar la puntuación.
- **Persistencia:** Al enviar la puntuación, se realiza una petición POST al backend, que almacena la valoración y recalcula la media.
- **Feedback inmediato:** El usuario recibe una notificación visual (`toast`) indicando si la puntuación se ha guardado correctamente o si ha habido algún error.

#### Ejemplo de uso en el frontend

```jsx
// src/paginas/MonumentoPage.jsx
const postPuntuacion = async () => {
  if (token) {
    await api.post("/puntuacion", {
      usuario: { id: user.id },
      articulo: { id: idMonumento, type: "monumento" },
      puntuacion: valoracion
    });
    toast.success("¡Puntuación enviada correctamente! 🎉");
  } else {
    toast.warning("Debes iniciar sesión para puntuar.");
    navigate("/login");
  }
};
```

#### Ejemplo de interfaz de valoración

```jsx
<Box sx={{ textAlign: "center", mt: 4 }}>
  <Typography variant="h5" sx={{ mb: 2 }}>
    ¿Qué te ha parecido el monumento?
  </Typography>
  <Rating
    name="monumento-rating"
    value={valoracion}
    onChange={handleRatingChange}
    precision={0.5}
    size="large"
  />
  <Button
    variant="contained"
    onClick={postPuntuacion}
    sx={{ mt: 2 }}
  >
    Enviar puntuación
  </Button>
</Box>
```

#### Detalles técnicos

- **Precisión:** El componente de estrellas permite medias (por ejemplo, 4.5).
- **Reutilización:** El mismo patrón se aplica para monumentos, eventos y comidas, cambiando solo el tipo de artículo.
- **Actualización de rankings:** Cada vez que un usuario puntúa, los rankings se actualizan automáticamente para reflejar la nueva media.

#### Experiencia de usuario

- **Notificaciones claras:** El usuario sabe en todo momento si su puntuación ha sido aceptada o si necesita autenticarse.
- **Prevención de errores:** No se permite puntuar sin estar logueado ni enviar puntuaciones vacías.
- **Visualización de la puntuación:** El usuario puede ver su puntuación seleccionada antes de enviarla.

---

## Servicios y autenticación

La autenticación y los servicios en PatriGod están diseñados para ser seguros y centralizados:

- **API centralizada:** Todas las llamadas HTTP se gestionan desde `src/servicios/api.js` usando Axios, lo que permite un control único de cabeceras, errores y lógica de autenticación.
- **Autenticación JWT (JSON Web Token):**
  - El usuario inicia sesión mediante un formulario en el frontend.
  - El frontend envía las credenciales al backend (Spring Boot) a través de una petición POST.
  - Si las credenciales son correctas, el backend responde con un JWT en el cuerpo de la respuesta.
  - El frontend almacena este token JWT en `localStorage` (o en memoria/contexto si se prefiere mayor seguridad).
  - Para cada petición autenticada, el frontend añade el token JWT en la cabecera `Authorization` como `Bearer <token>`.
  - El backend valida el token en cada endpoint protegido y, si es válido, permite el acceso a los recursos.
  - Si el token expira o es inválido, el backend responde con un error 401 y el frontend puede redirigir al usuario al login.
- **Gestión global del usuario:** El contexto global (`UserContext`) mantiene el estado del usuario autenticado y el token, permitiendo acceder a esta información desde cualquier componente.
- **Protección de rutas:** Las rutas sensibles (como administración o perfil) están protegidas en el frontend y solo son accesibles si el usuario tiene un token válido y el rol adecuado.

**Ejemplo de configuración de Axios para incluir el token:**

```js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

Este flujo garantiza que solo los usuarios autenticados puedan acceder a las funcionalidades protegidas y que la comunicación con el backend sea segura y eficiente.

---

## Experiencia de usuario

- **Notificaciones**: Uso de `react-toastify` para feedback inmediato.
- **Animaciones y transiciones**: Fade, hover, y animaciones de Material UI.
- **Responsive**: Adaptado a móviles, tablets y escritorio.
- **Accesibilidad**: Uso de roles, labels y colores accesibles.

---

## Mapa interactivo

El **Mapa interactivo** es una de las funcionalidades más visuales y útiles de PatriGod. Permite a los usuarios explorar de manera geográfica todas las ciudades Patrimonio de la Humanidad disponibles en la plataforma.

### Características principales

- **Visualización centralizada:** Todas las ciudades se muestran como marcadores en un mapa de España (o del área configurada).
- **Interactividad:** Al hacer clic en un marcador, se despliega un popup con el nombre de la ciudad y un botón para acceder a su detalle.
- **Integración con Leaflet:** Utiliza `react-leaflet` y `leaflet` para una experiencia fluida y responsiva.
- **Diseño responsive:** El mapa se adapta a cualquier tamaño de pantalla.
- **Carga dinámica:** Los datos de las ciudades se obtienen desde el backend mediante Axios y se renderizan automáticamente en el mapa.

### Ejemplo de uso en el código

```jsx
// src/componentes/MapaCiudades/MapaCiudades.jsx
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

<MapContainer center={center} zoom={7} style={{ height: '100%', width: '100%' }}>
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  {ciudades.map(({ id, nombre, coords }) => (
    <Marker key={id} position={coords}>
      <Popup>
        <Typography variant="subtitle1">{nombre}</Typography>
        <Button component={Link} to={`/ciudad/${id}`}>Ver detalles</Button>
      </Popup>
    </Marker>
  ))}
</MapContainer>
```

### Detalles técnicos

- **Centro y zoom:** El mapa se centra por defecto en España (`[40.4168, -3.7038]`) y tiene un nivel de zoom adecuado para ver todas las ciudades.
- **Marcadores personalizados:** Puedes personalizar los iconos de los marcadores para adaptarlos a la identidad visual de tu proyecto.
- **Carga eficiente:** El componente muestra un spinner de carga mientras se obtienen los datos de las ciudades.
- **Accesibilidad:** Los popups y botones son accesibles y permiten navegación por teclado.

### Experiencia de usuario

- **Exploración rápida:** El usuario puede ver de un vistazo todas las ciudades disponibles y acceder a su información con un solo clic.
- **Integración con el resto de la app:** Desde el mapa se puede navegar directamente a la página de detalle de cada ciudad, facilitando la exploración y el descubrimiento.

---

## React-toastify

En este proyecto se utiliza la librería [`react-toastify`](https://fkhadra.github.io/react-toastify/) para mostrar notificaciones visuales (toasts) al usuario de forma sencilla y elegante.

### Instalación

```bash
npm install react-toastify
```

### Uso en el proyecto

- El componente `<ToastContainer />` se incluye en el layout principal para que los toasts estén disponibles en toda la aplicación.
- Se utiliza la función `toast` para mostrar mensajes de éxito, error, advertencia o información en acciones como login, registro, envío de emails, valoración de artículos, etc.

**Ejemplo de uso:**

```jsx
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// En el layout principal (por ejemplo, Layout.jsx)
<ToastContainer position="top-right" autoClose={3000} />

// En cualquier componente
toast.success("¡Operación realizada con éxito!");
toast.error("Ha ocurrido un error.");
toast.warning("Debes iniciar sesión para continuar.");
```

**Ventajas:**
- Feedback inmediato y visual para el usuario.
- Personalización de posición, duración y tipo de mensaje.
- Integración sencilla en cualquier parte del frontend.


---

## Rankings y valoraciones

El sistema de **ranking** de PatriGod es una de las funcionalidades más potentes y visuales de la plataforma. Permite a los usuarios descubrir cuáles son las ciudades, monumentos, eventos y comidas mejor valorados por la comunidad.

### ¿Cómo funciona el ranking?

- **Valoración por usuarios:** Los usuarios registrados pueden puntuar monumentos, eventos y comidas de cada ciudad.
- **Cálculo de medias:** Cada ranking se basa en la media de las puntuaciones recibidas por cada tipo de artículo.
- **Visualización atractiva:** Los rankings muestran medallas (oro, plata, bronce) para los primeros puestos, colores distintivos y tablas o tarjetas con la información relevante.

### Tipos de ranking disponibles

- **Ranking de Ciudades:**  
  Calculado a partir de la media de todas las puntuaciones de los artículos (monumentos, eventos y comidas) de cada ciudad.
- **Ranking de Monumentos:**  
  Media de las puntuaciones de los monumentos de cada ciudad.
- **Ranking de Eventos:**  
  Media de las puntuaciones de los eventos de cada ciudad.
- **Ranking de Comidas:**  
  Media de las puntuaciones de las comidas de cada ciudad.

### Páginas y componentes implicados

- **`RankingPage.jsx`**  
  Página principal de ranking de ciudades, muestra las ciudades mejor valoradas con tarjetas visuales y medallas.
- **`RankingArticulosPage.jsx`**  
  Página con pestañas para ver el ranking de monumentos, eventos y comidas. Cada pestaña carga su propio componente:
  - `RankingMonumentos.jsx`
  - `RankingEventos.jsx`
  - `RankingComidas.jsx`

### Ejemplo de visualización de ranking

```jsx
<Grid container spacing={4} justifyContent="center">
  {ciudades.map((ciudad, index) => (
    <Fade in key={ciudad.id}>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ /* ...estilos... */ }}>
          <Box sx={{ position: 'relative' }}>
            <CardMedia component="img" image={ciudad.imagenPrincipal} alt={ciudad.nombre} />
            <Tooltip title={index + 1 === 1 ? 'Oro' : index + 1 === 2 ? 'Plata' : index + 1 === 3 ? 'Bronce' : 'Ranking'} arrow>
              <Avatar sx={{ position: 'absolute', top: 16, left: 16, bgcolor: getMedalColor(index + 1) }}>
                <EmojiEventsIcon fontSize="large" />
              </Avatar>
            </Tooltip>
          </Box>
          <CardContent>
            <Typography variant="h6">{index + 1} - {ciudad.nombre}</Typography>
            <Typography variant="body1">
              <span style={{ fontSize: 22, marginRight: 4 }}>⭐</span>
              Puntuación: {ciudad.puntuacion ? ciudad.puntuacion.toFixed(2) : "0"}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Fade>
  ))}
</Grid>
```

### Ejemplo de tabla de ranking por artículos

```jsx
<Table>
  <TableHead>
    <TableRow>
      <TableCell>#</TableCell>
      <TableCell>Ciudad</TableCell>
      <TableCell>Puntuación Media</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {ranking.map((ciudad) => (
      <Fade in key={ciudad.ciudad_id}>
        <TableRow>
          <TableCell>
            {ciudad.posicion <= 3 && (
              <EmojiEventsIcon sx={{ color: getMedalColor(ciudad.posicion) }} />
            )}
            {ciudad.posicion}
          </TableCell>
          <TableCell>{ciudad.ciudad_nombre}</TableCell>
          <TableCell>
            <span style={{ fontSize: 20, marginRight: 4 }}>⭐</span>
            {ciudad.puntuacion_media.toFixed(2)}
          </TableCell>
        </TableRow>
      </Fade>
    ))}
  </TableBody>
</Table>
```

### Backend y actualización en tiempo real

- Los rankings se obtienen mediante peticiones Axios a endpoints del backend (Spring Boot), que calculan y devuelven las medias actualizadas.
- Cada vez que un usuario puntúa un artículo, el ranking se actualiza automáticamente en la interfaz.

### Experiencia visual

- Medallas de oro, plata y bronce para los primeros puestos.
- Colores y fondos degradados para destacar los mejores resultados.
- Animaciones de entrada (`Fade`) y efectos hover para mejorar la experiencia de usuario.

---

## Autor

Proyecto realizado por **Alejandro Copado López**.

---## Dependencia: react-toastify

En este proyecto se utiliza la librería [`react-toastify`](https://fkhadra.github.io/react-toastify/) para mostrar notificaciones visuales (toasts) al usuario de forma sencilla y elegante.

### Instalación

```bash
npm install react-toastify
```

### Uso en el proyecto

- El componente `<ToastContainer />` se incluye en el layout principal para que los toasts estén disponibles en toda la aplicación.
- Se utiliza la función `toast` para mostrar mensajes de éxito, error, advertencia o información en acciones como login, registro, envío de emails, valoración de artículos, etc.

**Ejemplo de uso:**

```jsx
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

<ToastContainer position="top-right" autoClose={3000} />

toast.success("¡Operación realizada con éxito!");
toast.error("Ha ocurrido un error.");
toast.warning("Debes iniciar sesión para continuar.");
```

**Ventajas:**
- Feedback inmediato y visual para el usuario.
- Personalización de posición, duración y tipo de mensaje.
- Integración sencilla en cualquier parte del frontend.

---